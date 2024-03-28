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
exports.StudentController = void 0;
const student_service_1 = require("../services/student.service");
const studentService = new student_service_1.StudentService();
class StudentController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield studentService.getAll();
            res.json({ response });
        });
    }
    new(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield studentService.new(req.body);
            console.log({ response });
            if (response.success)
                res.json({ data: response.data });
            else {
                res.status(409).json({ error: response.error });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield studentService.deleteById(req.params.id);
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
            const response = yield studentService.updateById(req.params.id, req.body);
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
            const response = yield studentService.getById(req.params.id);
            if (response.success) {
                res.json({ data: response.data });
            }
            else {
                res.status(404).json({ error: response.error });
            }
        });
    }
}
exports.StudentController = StudentController;
