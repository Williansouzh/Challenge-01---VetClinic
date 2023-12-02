import express from "express"
import { userController } from "@/controllers/userController"
const router = express.Router()

router.get("/tutors", userController.getAll)

export default router
