import { Test } from "@prisma/client";
import { prisma } from "../database.js";

async function getTestsByDiscipline() {
  return prisma.term.findMany({
    include: {
      disciplines: {
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers() {
  return prisma.teacherDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function findByTeacherId(teacherId :number) {
  return prisma.teacherDiscipline.findMany({
    where: {
      teacherId
    },
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function findByDisciplineId(disciplineId: number) {
  return prisma.term.findMany({
    include: {
      disciplines: {
        where: {
          id: disciplineId
        },
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function updateByTestId(testId: number) {
  await prisma.test.update({
    where: {
      id: testId
    },
    data: {
      views: {
        increment: 1
      }
    }
  });
}

async function insert(test: Test) {
  await prisma.test.create({
    data: test
  })
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  findByTeacherId,
  findByDisciplineId,
  updateByTestId,
  insert
};
