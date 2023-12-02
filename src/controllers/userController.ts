import { Request, Response } from "express"
import prisma from "@/connection/mongoDb"
export class userController {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await prisma.tutor.create({
        data: {
          email: "email@gmail.com",
          name: "asdji",
          phone: "545465",
          zipCode: "545465",
          date_of_birth: "321346546",
        },
      })

      console.log(allUsers)
      res.json(allUsers)
    } catch (error) {
      console.error("Error fetching tutors:", error)
    }
  }
}
