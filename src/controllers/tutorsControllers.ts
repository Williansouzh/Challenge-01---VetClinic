import { Response, Request } from 'express';
import connectToMongoDB from '../connection/mongodb';
import TutorModel, { Tutor } from '../models/vetclinic';

export class TutorsControllers {
  static getAll(req: Request, res: Response): void {
    connectToMongoDB()
      .then(() => TutorModel.find())
      .then((tutors) => {
        console.log('Fetched tutors:', tutors);
        res.status(200).json(tutors);
      })
      .catch((error) => {
        console.error('Error fetching tutors:', error);
        TutorsControllers.handleErrorResponse(res);
      });
  }

  static create(req: Request, res: Response): void {
    connectToMongoDB()
      .then(() => {
        const { name, phone, email, date_of_birth, zipCode, pets } = req.body;
        const newTutor: Tutor = new TutorModel({
          name,
          phone,
          email,
          date_of_birth,
          zipCode,
          pets,
        });
        return newTutor.save();
      })
      .then((createdTutor) => {
        console.log('Created tutor:', createdTutor);
        res.status(201).json(createdTutor);
      })
      .catch((error) => {
        console.error('Error creating tutor:', error);
        TutorsControllers.handleErrorResponse(res);
      });
  }

  private static handleErrorResponse(res: Response): void {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
