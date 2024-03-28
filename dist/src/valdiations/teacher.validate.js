"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherParamsSchema = exports.teacherUpdateSchema = exports.teacherPostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.teacherPostSchema = {
    body: joi_1.default.object().schema({
        bloodGroup: joi_1.default.string().required(),
        subject: joi_1.default.string().required(),
        empId: joi_1.default.number().required(),
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
    }),
};
exports.teacherUpdateSchema = {
    body: joi_1.default.object().schema({
        bloodGroup: joi_1.default.string(),
        subject: joi_1.default.string(),
        empId: joi_1.default.number(),
        firstName: joi_1.default.string(),
        lastName: joi_1.default.string(),
    }),
    params: joi_1.default.object().schema({
        id: joi_1.default.number().required(),
    }),
};
exports.teacherParamsSchema = {
    params: joi_1.default.object().schema({
        id: joi_1.default.number().required(),
    }),
};
