import { prisma } from "../database.js";

async function findMany() {
    return prisma.teacher.findMany();
}

async function findByDisciplineId(disciplineId: number) {
    return prisma.teacherDiscipline.findMany({
        where: {
            disciplineId
        },
        include: {
            teacher: true
        }
    });
}

export default {
    findMany,
    findByDisciplineId
};
