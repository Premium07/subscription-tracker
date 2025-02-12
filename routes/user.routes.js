import { Router } from "express";
import { getSingleUser, getUsers } from "../controllers/user.controller.js";
import { authorized } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorized, getSingleUser);
userRouter.post("/", (req, res) => res.send({ title: "create a user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "update user" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "delete all user" }));

export default userRouter;
