"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import axios from "axios";
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const AppDataSource_1 = require("./AppDataSource");
// import StudentRouter from "./src/routes/teacher.route";
const teacher_route_1 = __importDefault(require("./src/routes/teacher.route"));
const student_route_1 = __importDefault(require("./src/routes/student.route"));
// import TeacherRouter from "./src/routes/teacher.route";
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
const port = process.env.PORT;
// const port = 8082;
console.log(process.env.PORT);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello AP");
});
app.use("/teacher", teacher_route_1.default);
AppDataSource_1.AppDataSource.initialize()
    .then(() => {
    app.listen(port);
    console.log("Data Source has been intialized");
})
    .catch((e) => {
    console.log({ e: e }, "start");
});
// app.use("/student", StudentRouter);
app.use("/teacher", teacher_route_1.default);
app.use("/student", student_route_1.default);
// startServer();
