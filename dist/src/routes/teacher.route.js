"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const teacher_controller_1 = require("../controllers.ts/teacher.controller");
const teacherController = new teacher_controller_1.TeacherController();
router.get("/", teacherController.getAll);
router.post("/new", teacherController.new);
router.patch("/:id", teacherController.updateById);
router.delete("/:id", teacherController.deleteById);
router.get("/:id", teacherController.getById);
exports.default = router;
