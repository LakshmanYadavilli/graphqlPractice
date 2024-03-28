import { Student } from "../entities/student.entity";
export type studentObjType = {
  firstName: string;
  lastName: string;
  grade: string;
  bloodGroup: string;
  teacher: string;
  [key: string]: string;
};
export type studentUpdateType = {
  firstName?: string;
  lastName?: string;
  grade?: string;
  bloodGroup?: string;
  teacher?: string;
  [key: string]: string | undefined;
};
export type returnType = { data: Student | Student[] } | { error: any };
