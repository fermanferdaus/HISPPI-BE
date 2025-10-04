import express from "express";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";

const router = express.Router();

// superadmin only
router.post("/", verifyToken, checkRole(["superadmin"]), createCategory);
router.get("/", verifyToken, getCategories);
router.put("/:id", verifyToken, checkRole(["superadmin"]), updateCategory);
router.delete("/:id", verifyToken, checkRole(["superadmin"]), deleteCategory);

export default router;
