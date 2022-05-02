import { Request, Response } from "express";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
}

async function findByTeacherId(req: Request, res: Response) {
  const { teacherId } = req.params;

  const tests = await testService.findByTeacherId(parseInt(teacherId));
  res.send({ tests });
}

async function findByDisciplineId(req: Request, res: Response) {
  const { disciplineId } = req.params;
  
  const tests = await testService.findByDisciplineId(parseInt(disciplineId));
  res.send({ tests });
}

async function updateByTestId(req: Request, res: Response) {
  const { testId } = req.params;
  
  await testService.updateByTestId(parseInt(testId));

  res.sendStatus(200);
}

export default {
  find,
  findByTeacherId,
  findByDisciplineId,
  updateByTestId
};
