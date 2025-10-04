import express from "express";
import { getInfo, updateInfo } from "../controllers/info.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { checkRole } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getInfo);
router.put("/:section", verifyToken, checkRole(["superadmin"]), updateInfo);

export default router;
