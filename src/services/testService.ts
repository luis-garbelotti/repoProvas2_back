import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

async function findByTeacherId(teacherId: number) {
  return testRepository.findByTeacherId(teacherId);
}

async function findByDisciplineId(disciplineId: number) {
  return testRepository.findByDisciplineId(disciplineId);
}

async function updateByTestId(testId:number) {
  return testRepository.updateByTestId(testId);
}

export default {
  find,
  findByTeacherId,
  findByDisciplineId,
  updateByTestId
};
