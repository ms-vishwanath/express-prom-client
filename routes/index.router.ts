import { Router } from "express";
const router = Router();
import healthRoutes from "./health.router";

router.get("/", healthRoutes);

export default router;
