import { Router } from "express";
import testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const testRouter = Router();

testRouter.get("/tests", ensureAuthenticatedMiddleware, testController.find);
testRouter.get("/tests/teachers/:teacherId", ensureAuthenticatedMiddleware, testController.findByTeacherId)
testRouter.get("/tests/disciplines/:disciplineId", ensureAuthenticatedMiddleware, testController.findByDisciplineId)

export default testRouter;