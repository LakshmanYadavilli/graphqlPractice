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
exports.TeacherService = void 0;
const teacher_entity_1 = require("../entities/teacher.entity");
const AppDataSource_1 = require("../../AppDataSource");
const class_transformer_1 = require("class-transformer");
class TeacherService {
    constructor(teacherRepositry = AppDataSource_1.AppDataSource.getRepository(teacher_entity_1.Teacher)) {
        this.teacherRepositry = teacherRepositry;
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield this.teacherRepositry.find({
                    relations: {
                        student: true,
                    },
                });
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
                const teacher = new teacher_entity_1.Teacher();
                Object.keys(data).forEach((key) => {
                    teacher[key] = data[key];
                });
                yield this.teacherRepositry.save(teacher);
                const obj = (0, class_transformer_1.instanceToPlain)(teacher);
                return { success: true, data: obj };
            }
            catch (e) {
                console.log(e.message);
                return { success: false, error: e.message };
            }
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.teacherRepositry.findOneBy({ id });
                if (!obj || Object.keys(obj).length === 0) {
                    throw new Error(`User not found with that id:${id} `);
                }
                yield this.teacherRepositry.delete(obj);
                return { success: true, data: obj };
            }
            catch (e) {
                return { success: false, error: e.message };
            }
        });
        this.updateById = (id, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.teacherRepositry.findOneBy({ id });
                console.log({ obj, id });
                if (!obj) {
                    throw new Error("Correct Id is not valid");
                }
                Object.keys(data).forEach((i) => {
                    obj[i] = data[i];
                });
                yield this.teacherRepositry.save(obj);
                const obj1 = (0, class_transformer_1.instanceToPlain)(obj);
                return { success: true, data: obj1 };
            }
            catch (e) {
                return { success: false, error: e.message };
            }
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const obj = yield this.teacherRepositry.findOne({
                    where: { id },
                    relations: { student: true },
                });
                if (!obj)
                    throw new Error(`Teacher doesn't exist with ID:${id}`);
                return { success: true, data: obj };
            }
            catch (e) {
                return { success: true, error: e.message };
            }
        });
    }
}
exports.TeacherService = TeacherService;
