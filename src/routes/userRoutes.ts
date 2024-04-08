import { UserController } from "@src/controllers/user";
import { Router } from "express";

const route = Router();
const userController = new UserController();

route.get("/", userController.create);
route.get("/users", userController.getAll);

export default route;
