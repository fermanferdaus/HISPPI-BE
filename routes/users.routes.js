import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", verifyToken, checkRole(["superadmin"]), createUser);
router.get("/", verifyToken, checkRole(["superadmin"]), getUsers);
router.delete("/:id", verifyToken, checkRole(["superadmin"]), deleteUser);

export default router;
