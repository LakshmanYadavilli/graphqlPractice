import { Request, Response } from "express";
import { TeacherService } from "../services/teacher.service";

const teacherService = new TeacherService();

export class TeacherController {
  async getAll(req: Request, res: Response) {
    const response = await teacherService.getAll();

    res.json({ response });
  }
  async new(req: Request, res: Response) {
    const response = await teacherService.new(req.body);
    if (response.success) res.json({ data: response.data });
    else {
      res.status(409).json({ error: response.error });
    }
  }
  async deleteById(req: Request, res: Response) {
    const response = await teacherService.deleteById(req.params.id);
    if (response.success) {
      res.json({ data: response.data });
    } else {
      res.status(404).json({ error: response.error });
    }
  }
  async updateById(req: Request, res: Response) {
    const response = await teacherService.updateById(req.params.id, req.body);
    if (response.success) {
      res.json({ data: response.data });
    } else {
      res.status(400).json({ error: response.error });
    }
  }
  async getById(req: Request, res: Response) {
    const response = await teacherService.getById(req.params.id);

    if (response.success) {
      res.json({ data: response.data });
    } else {
      res.status(404).json({ error: response.error });
    }
  }
}
