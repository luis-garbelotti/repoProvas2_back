import { Router } from "express";
import teacherController from "../controllers/teacherController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const teacherRouter = Router();

teacherRouter.get(
    "/teachers",
    ensureAuthenticatedMiddleware,
    teacherController.findMany
);

teacherRouter.get(
    "/teachers/disciplines/:disciplineId",
    ensureAuthenticatedMiddleware,
    teacherController.findByDisciplineId
);

export default teacherRouter;