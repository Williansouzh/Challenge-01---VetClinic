import TutorModel, { Tutor, Pet } from '../models/vetclinic';

export const editPet = async (
  petId: string,
  tutorId: string,
  petData: Partial<Pet>,
): Promise<Tutor | null> => {
  const tutor = await TutorModel.findById(tutorId);

  if (!tutor) {
    throw new Error('Tutor not find.');
  }

  const editedPetIndex = tutor.pets.findIndex((pet) => pet.id === petId);

  if (editedPetIndex === -1) {
    throw new Error('Pet dont find in Tutor.');
  }

  const updatedPet = { ...tutor.pets[editedPetIndex], ...petData };

  tutor.pets[editedPetIndex] = updatedPet;

  const setUpdateObject: { [key: string]: unknown } = {};

  Object.keys(petData).forEach((key) => {
    setUpdateObject[`pets.$.${key}`] = updatedPet[key as keyof Pet];
  });

  const editedTutor = await TutorModel.findOneAndUpdate(
    { _id: tutorId, 'pets._id': petId },
    { $set: setUpdateObject },
    { new: true },
  );

  return editedTutor;
};
