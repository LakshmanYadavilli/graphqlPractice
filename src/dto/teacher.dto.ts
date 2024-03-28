import { Teacher } from "../entities/teacher.entity";
export type teacherObjType = {
  firstName: string;
  lastName: string;
  subject: string;
  empId: number;
  bloodGroup: string;
  [key: string]: string | number;
};
export type teacherUpdateType = {
  firstName?: string;
  lastName?: string;
  subject?: string;
  empId?: number;
  bloodGroup?: string;
  [key: string]: string | number | undefined;
};
export type returnType = {
  success: boolean;
  data?: Teacher | Teacher[];
  error?: string;
};
