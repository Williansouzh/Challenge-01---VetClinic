// TutorsControllers.ts
import { Response, Request } from 'express';
import connectToMongoDB from '../connection/mongodb';
import {
  getAllTutors,
  createTutor,
  editTutor,
} from '../services/tutorsService';
import {
  handleSuccessResponse,
  handleCreateSuccessResponse,
  handleErrorResponse,
} from '../helpers/responseHelpers';

export class TutorsControllers {
  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      await connectToMongoDB();
      const tutors = await getAllTutors();
      handleSuccessResponse(res, tutors);
    } catch (error) {
      console.error('Error fetching tutors:', error);
      handleErrorResponse(res);
    }
  }

  static async create(req: Request, res: Response): Promise<void> {
    try {
      await connectToMongoDB();
      const tutorData = req.body;
      const createdTutor = await createTutor(tutorData);
      handleCreateSuccessResponse(res, createdTutor);
    } catch (error) {
      console.error('Error creating tutor:', error);
      handleErrorResponse(res);
    }
  }

  static async editTutor(req: Request, res: Response): Promise<void> {
    try {
      await connectToMongoDB();
      const tutorData = req.body;
      const tutorID = req.params.id;
      const editedTutor = await editTutor(tutorID, tutorData);

      handleCreateSuccessResponse(res, editedTutor);
    } catch (error) {
      console.error('Error edit tutor:', error);
      handleErrorResponse(res);
    }
  }

  static async editPet(req: Request, res: Response);
}
