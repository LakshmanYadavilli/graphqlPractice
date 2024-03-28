import { Router } from "express";

const router = Router();

import { TeacherController } from "../controllers.ts/teacher.controller";
const teacherController = new TeacherController();

router.get("/", teacherController.getAll);
router.post("/new", teacherController.new);
router.patch("/:id", teacherController.updateById);
router.delete("/:id", teacherController.deleteById);
router.get("/:id", teacherController.getById);

export default router;
