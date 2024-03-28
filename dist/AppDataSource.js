"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const teacher_entity_1 = require("./src/entities/teacher.entity");
const student_entity_1 = require("./src/entities/student.entity");
const user_entity_1 = require("./src/entities/user.entity");
const aadhar_entity_1 = require("./src/entities/aadhar.entity");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    synchronize: true,
    entities: [teacher_entity_1.Teacher, student_entity_1.Student, user_entity_1.User, aadhar_entity_1.Aadhar],
});
