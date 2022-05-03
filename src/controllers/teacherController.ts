import { Request, Response } from "express";
import teacherService from "../services/teacherService.js";

async function findMany(req: Request, res: Response) {
    const teachers = await teacherService.findMany();
    res.status(200).send({ teachers: teachers });
}

async function findByDisciplineId(req: Request, res: Response) {
    const { disciplineId } = req.params;

    const teachers = await teacherService.findByDisciplineId(parseInt(disciplineId));
    res.status(200).send({ teachers: teachers });
}

export default {
    findMany,
    findByDisciplineId
};
