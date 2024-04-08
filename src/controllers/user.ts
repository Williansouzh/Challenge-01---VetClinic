import { Request, Response } from "express";

export class UserController {
  public async create(req: Request, res: Response): Promise<void> {}

  public async getAll(req: Request, res: Response): Promise<void> {
    res.status(200).send("sdfsdfsdf");
  }
}
