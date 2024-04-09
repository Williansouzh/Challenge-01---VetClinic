import { NextFunction, Request, Response } from "express";
import { UserService } from "@src/services/user";
import { User } from "@src/database/models/user";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { name, email, password, birth } = req.body;

    try {
      const newUser: User = await this.userService.createNewUser({
        name,
        email,
        password,
        birth,
      });

      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
}
