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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const student_entity_1 = require("../entities/student.entity");
const AppDataSource_1 = require("../../AppDataSource");
const class_transformer_1 = require("class-transformer");
const chalk_1 = __importDefault(require("chalk"));
class StudentService {
    constructor(studentRepositry = AppDataSource_1.AppDataSource.getRepository(student_entity_1.Student)) {
        this.studentRepositry = studentRepositry;
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield this.studentRepositry.find({
                    relations: {
                        teacher: true,
                    },
                });
                console.log({ data });
                data = (0, class_transformer_1.instanceToPlain)(data);
                return { success: true, data };
            }
            catch (e) {
                console.log(e);
                return { success: false, error: e.message };
            }
        });
        this.new = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const student = new student_entity_1.Student();
                Object.keys(data).forEach((key) => {
                    student[key] = data[key];
                });
                yield this.studentRepositry.save(student);
                const obj = (0, class_transformer_1.instanceToPlain)(student);
                console.log({ obj });
                return { success: true, data: obj };
            }
            catch (e) {
                console.log(e.message);
                return { success: false, error: e.message };
            }
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.studentRepositry.findOneBy({ id });
                const obj1 = (0, class_transformer_1.instanceToPlain)(obj);
                if (!obj || Object.keys(obj).length === 0) {
                    throw new Error(`User not found with that id:${id} `);
                }
                yield this.studentRepositry.delete(obj);
                return { success: true, data: obj1 };
            }
            catch (e) {
                return { success: false, error: e.message };
            }
        });
        this.updateById = (id, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.studentRepositry.findOneBy({ id });
                if (!obj)
                    throw new Error(`User not found with ID:${id}`);
                Object.keys(data).forEach((i) => {
                    obj[i] = data[i];
                });
                yield this.studentRepositry.save(obj);
                const obj1 = (0, class_transformer_1.instanceToPlain)(obj);
                return { success: true, data: obj1 };
            }
            catch (e) {
                return { success: false, error: e.message };
            }
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.studentRepositry.findOne({
                    where: { id },
                    relations: { teacher: true },
                });
                if (!obj)
                    throw new Error(chalk_1.default.red(`Student doesn't exist with ID:${id}`));
                return { success: true, data: obj };
            }
            catch (e) {
                return { success: true, error: e.message };
            }
        });
    }
}
exports.StudentService = StudentService;
