import { Test } from "@prisma/client";
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

async function insert(test: Test) {
  return testRepository.insert(test);
}

export default {
  find,
  findByTeacherId,
  findByDisciplineId,
  updateByTestId,
  insert
};
