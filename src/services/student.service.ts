import { Student } from "../entities/student.entity";
import { AppDataSource } from "../../AppDataSource";
import { instanceToPlain } from "class-transformer";
import { logger } from "../middlewars/winston";

import {
  studentObjType,
  studentUpdateType,
  returnType,
} from "../dto/student.dto";

export class StudentService {
  constructor(
    private studentRepositry = AppDataSource.getRepository(Student)
  ) {}
  getAll = async (): Promise<returnType> => {
    let data: Student[];
    try {
      data = await this.studentRepositry.find({
        relations: {
          teacher: true,
        },
      });

      data = instanceToPlain(data) as Student[];
      console.log({ data });

      return { data };
    } catch (e: any) {
      return { error: e.message };

      // return { success: false, error: e.message };
    }
  };

  new = async (data: studentObjType): Promise<returnType> => {
    try {
      const student = new Student();

      Object.keys(data).forEach((key) => {
        (student as any)[key] = data[key];
      });

      await this.studentRepositry.save(student);

      const obj = instanceToPlain(student) as Student;
      console.log({ obj });
      return { data: obj };
    } catch (e: any) {
      console.log(e.message);
      return { error: e.message };
    }
  };
  deleteById = async (id: string): Promise<returnType> => {
    try {
      const obj = await this.studentRepositry.findOneBy({ id });
      const obj1 = instanceToPlain(obj) as Student;
      if (!obj || Object.keys(obj).length === 0) {
        throw new Error(`User not found with that id:${id} `);
      }
      await this.studentRepositry.delete(obj);
      return { data: obj1 };
    } catch (e: any) {
      return { error: e.message };
    }
  };
  updateById = async (
    id: string,
    data: studentUpdateType
  ): Promise<returnType> => {
    try {
      const obj = await this.studentRepositry.findOneBy({ id });
      if (!obj) throw new Error(`User not found with ID:${id}`);

      Object.keys(data).forEach((i) => {
        (obj as any)[i] = data[i];
      });
      await this.studentRepositry.save(obj);
      const obj1 = instanceToPlain(obj) as Student;
      return { data: obj1 };
    } catch (e: any) {
      return { error: e.message };
    }
  };
  getById = async (id: string): Promise<returnType> => {
    try {
      const obj = await this.studentRepositry.findOne({
        where: { id },
        relations: { teacher: true },
      });
      if (!obj) throw new Error(`Student doesn't exist with ID:${id}`);

      return { data: obj };
    } catch (e: any) {
      logger.error(e.message);
      return { error: e.message };
    }
  };
}
