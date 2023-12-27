import Express from "express";
import { createUser, dropData, getUsers } from "../../controller/user.controller.js";

export const UserRouter = Express.Router();

UserRouter.get("/dropData",dropData)
UserRouter.get("/", getUsers);
UserRouter.post("/", createUser);
