import { Router } from "express";
import { getSingleUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getSingleUser);
userRouter.post("/", (req, res) => res.send({ title: "create a user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "update user" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "delete all user" }));

export default userRouter;
