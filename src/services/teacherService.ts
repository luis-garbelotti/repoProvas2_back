import teacherRepository from "../repositories/teacherRepository.js";

async function findMany() {
    return teacherRepository.findMany();
}

async function findByDisciplineId(disciplineId: number) {
    return teacherRepository.findByDisciplineId(disciplineId);
}

export default {
    findMany,
    findByDisciplineId
};