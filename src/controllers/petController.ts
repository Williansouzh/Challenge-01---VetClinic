// TutorsControllers.ts
import { Response, Request } from 'express';
import connectToMongoDB from '../connection/mongodb';
import {
  handleCreateSuccessResponse,
  handleErrorResponse,
} from '../helpers/responseHelpers';
import { editPet, deletePet, createPet } from '../services/petService';

export class PetControllers {
  static async createPet(req: Request, res: Response) {
    try {
      await connectToMongoDB();
      const petData = req.body;
      const tutorID = req.params.tutorId;
      const editedPet = await createPet(tutorID, petData);

      handleCreateSuccessResponse(res, editedPet);
    } catch (error: unknown) {
      handleErrorResponse(
        res,
        error instanceof Error ? error.message : 'Erro desconhecido.',
      );
    }
  }
  static async editPet(req: Request, res: Response) {
    try {
      await connectToMongoDB();
      const petData = req.body;
      const petID = req.params.petId;
      const tutorID = req.params.tutorId;
      const editedPet = await editPet(petID, tutorID, petData);

      handleCreateSuccessResponse(res, editedPet);
    } catch (error: unknown) {
      handleErrorResponse(
        res,
        error instanceof Error ? error.message : 'Erro desconhecido.',
      );
    }
  }
  static async deletePet(req: Request, res: Response) {
    try {
      const { petId, tutorId } = req.params;
      console.log(petId, tutorId);
      const deletedPet = await deletePet(petId, tutorId);
      handleCreateSuccessResponse(res, deletedPet);
    } catch (error) {
      handleErrorResponse(
        res,
        error instanceof Error ? error.message : 'Erro desconhecido.',
      );
    }
  }
}
