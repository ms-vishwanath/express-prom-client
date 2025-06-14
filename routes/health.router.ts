import { Router } from "express";
const router = Router();

router.get("/health", (req, res) => {
  res.json({ message: "Welcome to the API!" });
  return;
});

export default router;
