import express from "express";
import userController from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, userController.createCurrentUser);
router.get("/", jwtCheck, jwtParse, userController.getCurrentUser);
router.put("/", jwtCheck, jwtParse,validateUserRequest, userController.updateCurrentUser);

export default router;
