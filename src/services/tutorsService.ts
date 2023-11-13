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
  tutorData: Partial<Tutor>,
): Promise<Tutor | null> => {
  const editedTutor = await TutorModel.findByIdAndUpdate(
    tutorId,
    { $set: tutorData },
    {
      new: true,
    },
  );
  return editedTutor;
};

export const deleteTutor = async (tutorId: string): Promise<string | null> => {
  const deletedTutor = await TutorModel.findOneAndDelete({ _id: tutorId });

  if (deletedTutor) {
    return `Tutor with ID ${tutorId} deleted successfully.`;
  } else {
    return null;
  }
};
