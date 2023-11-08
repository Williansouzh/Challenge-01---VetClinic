import { Response, Request } from 'express'
import connectToMongoDB from '../connection/mongodb'
import TutorModel from '../models/vetclinic'

export class TutorsControllers {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const resposta = await TutorModel.find({})
      res.status(200).json()
    } catch (error) {
      console.error('Error fetching tutors:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
