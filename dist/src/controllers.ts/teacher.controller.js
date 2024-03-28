"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const teacher_service_1 = require("../services/teacher.service");
const teacherService = new teacher_service_1.TeacherService();
class TeacherController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield teacherService.getAll();
            res.json({ response });
        });
    }
    new(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield teacherService.new(req.body);
            if (response.success)
                res.json({ data: response.data });
            else {
                res.status(409).json({ error: response.error });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield teacherService.deleteById(req.params.id);
            if (response.success) {
                res.json({ data: response.data });
            }
            else {
                res.status(404).json({ error: response.error });
            }
        });
    }
    updateById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield teacherService.updateById(req.params.id, req.body);
            if (response.success) {
                res.json({ data: response.data });
            }
            else {
                res.status(400).json({ error: response.error });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield teacherService.getById(req.params.id);
            if (response.success) {
                res.json({ data: response.data });
            }
            else {
                res.status(404).json({ error: response.error });
            }
        });
    }
}
exports.TeacherController = TeacherController;
