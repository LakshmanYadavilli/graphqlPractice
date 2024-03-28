// import { StudentService } from "../services/student.service";
// import { Request, Response } from "express";
// const studentService = new StudentService();
// export class StudentController {
//   async getAll(req: Request, res: Response) {
//     const response = await studentService.getAll();

//     res.json({ response });
//   }
//   async new(req: Request, res: Response) {
//     const response = await studentService.new(req.body);
//     console.log({ response });
//     if (response.success) res.json({ data: response.data });
//     else {
//       res.status(409).json({ error: response.error });
//     }
//   }
//   async deleteById(req: Request, res: Response) {
//     const response = await studentService.deleteById(req.params.id);
//     if (response.success) {
//       res.json({ data: response.data });
//     } else {
//       res.status(404).json({ error: response.error });
//     }
//   }
//   async updateById(req: Request, res: Response) {
//     const response = await studentService.updateById(req.params.id, req.body);
//     if (response.success) {
//       res.json({ data: response.data });
//     } else {
//       res.status(400).json({ error: response.error });
//     }
//   }
//   async getById(req: Request, res: Response) {
//     const response = await studentService.getById(req.params.id);

//     if (response.success) {
//       res.json({ data: response.data });
//     } else {
//       res.status(404).json({ error: response.error });
//     }
//   }
// }
