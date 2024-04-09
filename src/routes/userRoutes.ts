import { UserController } from "@src/controllers/user";
import { UserService } from "@src/services/user";
import { Router } from "express";

const route = Router();

const userService = new UserService();
const userController = new UserController(userService);

route.get("/users", userController.getAll.bind(userController));
route.post("/users", userController.create.bind(userController));

export default route;
