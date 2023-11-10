import TutorModel, { Tutor } from '../models/vetclinic';

export const getAllTutors = async (): Promise<Tutor[]> => {
  return TutorModel.find();
};

export const createTutor = async (tutorData: Tutor): Promise<Tutor> => {
  const newTutor: Tutor = new TutorModel(tutorData);
  return newTutor.save();
};
export const editTutor = async (
  tutorId: string,
  tutorData: Tutor,
): Promise<Tutor | null> => {
  const editedTutor = await TutorModel.findByIdAndUpdate(tutorId, tutorData, {
    new: true,
  });
  return editedTutor;
};
