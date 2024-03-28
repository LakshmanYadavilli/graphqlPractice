import { Teacher } from "../entities/teacher.entity";
import { AppDataSource } from "../../AppDataSource";
import { instanceToPlain } from "class-transformer";
import {
  teacherObjType,
  teacherUpdateType,
  returnType,
} from "../dto/teacher.dto";

export class TeacherService {
  constructor(
    private teacherRepositry = AppDataSource.getRepository(Teacher)
  ) {}
  getAll = async (): Promise<returnType> => {
    let data: Teacher[];
    try {
      data = await this.teacherRepositry.find({
        relations: {
          student: true,
        },
      });
      data = instanceToPlain(data) as Teacher[];

      return { success: true, data };
    } catch (e: any) {
      console.log(e);
      return { success: false, error: e.message };
    }
  };

  new = async (data: teacherObjType): Promise<returnType> => {
    try {
      const teacher = new Teacher();

      Object.keys(data).forEach((key) => {
        (teacher as any)[key] = data[key];
      });

      await this.teacherRepositry.save(teacher);

      const obj = instanceToPlain(teacher) as Teacher;
      return { success: true, data: obj };
    } catch (e: any) {
      console.log(e.message);
      return { success: false, error: e.message };
    }
  };

  deleteById = async (id: string): Promise<returnType> => {
    try {
      const obj = await this.teacherRepositry.findOneBy({ id });
      if (!obj || Object.keys(obj).length === 0) {
        throw new Error(`User not found with that id:${id} `);
      }
      await this.teacherRepositry.delete(obj);
      return { success: true, data: obj };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  };

  updateById = async (
    id: string,
    data: teacherUpdateType
  ): Promise<returnType> => {
    try {
      const obj = await this.teacherRepositry.findOneBy({ id });
      console.log({ obj, id });

      if (!obj) {
        throw new Error("Correct Id is not valid");
      }

      Object.keys(data).forEach((i) => {
        (obj as any)[i] = data[i];
      });
      await this.teacherRepositry.save(obj);
      const obj1 = instanceToPlain(obj) as Teacher;
      return { success: true, data: obj1 };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  };

  getById = async (id: string): Promise<returnType> => {
    try {
      const obj = await this.teacherRepositry.findOne({
        where: { id },
        relations: { student: true },
      });
      if (!obj) throw new Error(`Teacher doesn't exist with ID:${id}`);

      return { success: true, data: obj };
    } catch (e: any) {
      return { success: true, error: e.message };
    }
  };
}
