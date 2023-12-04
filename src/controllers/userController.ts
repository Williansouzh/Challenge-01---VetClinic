import { Request, Response } from "express"
import prisma from "@/connection/mongoDb"
export class userController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await prisma.tutor.findMany()
      res.json(allUsers)
    } catch (error) {
      console.error("Error fetching tutors:", error)
    }
  }
}
