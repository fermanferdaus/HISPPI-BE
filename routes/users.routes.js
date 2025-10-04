import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";

const router = express.Router();

// hanya superadmin yang bisa kelola admin
router.post("/", verifyToken, checkRole(["superadmin"]), createUser);
router.get("/", verifyToken, checkRole(["superadmin"]), getUsers);
router.put("/:id", verifyToken, checkRole(["superadmin"]), updateUser);
router.delete("/:id", verifyToken, checkRole(["superadmin"]), deleteUser);

export default router;
