import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (res, req) => res.send({ title: "get all users" }));
userRouter.get("/:id", (res, req) => res.send({ title: "get single user" }));
userRouter.post("/", (res, req) => res.send({ title: "create a user" }));
userRouter.put("/:id", (res, req) => res.send({ title: "update user" }));
userRouter.delete("/:id", (res, req) => res.send({ title: "delete all user" }));

export default userRouter;
