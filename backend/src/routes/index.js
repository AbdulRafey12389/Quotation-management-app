import { Router } from "express";

import authRoutes from "./auth.js";
// import adminRoutes from "./admin.js";
import userRoutes from "./user.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("api is working");
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
// router.use("/admin", adminRoutes);

export default router;
