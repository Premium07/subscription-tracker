import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (res, req) =>
  res.send({ title: "get all subscriptions" })
);
subscriptionRouter.get("/:id", (res, req) =>
  res.send({ title: "get single subscriptions" })
);
subscriptionRouter.post("/", (res, req) =>
  res.send({ title: "cretae subscriptions" })
);
subscriptionRouter.put("/:id", (res, req) =>
  res.send({ title: "update subscriptions" })
);
subscriptionRouter.delete("/:id", (res, req) =>
  res.send({ title: "delete subscriptions" })
);
subscriptionRouter.get("/user/:id", (res, req) =>
  res.send({ title: "get all user subscriptions" })
);
subscriptionRouter.put("/:id/cancel", (res, req) =>
  res.send({ title: "cancel user subscriptions" })
);
subscriptionRouter.get("/upcoming-renewals", (res, req) =>
  res.send({ title: "upcoming subscriptions" })
);

export default subscriptionRouter;
