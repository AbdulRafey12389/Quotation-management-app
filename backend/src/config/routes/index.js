import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("API is running...");
});

// AUTH ROUTES
// router.use("/auth", authRoutes);

export default router;