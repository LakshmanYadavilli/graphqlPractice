import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Teacher } from "./src/entities/teacher.entity";
import { Student } from "./src/entities/student.entity";
import { User } from "./src/entities/user.entity";
import { Aadhar } from "./src/entities/aadhar.entity";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  entities: [Teacher, Student, User, Aadhar],
});
