import TutorModel, { Tutor, Pet } from '../models/vetclinic';

export const editPet = async (
  petId: string,
  tutorId: string,
  petData: Pet,
): Promise<Tutor | null> => {
  const tutor = await TutorModel.findById(tutorId);
  console.log(tutor);
  if (!tutor) {
    throw new Error('Tutor não encontrado.');
  }

  const editedPetIndex = tutor.pets.findIndex((pet) => pet.id === petId);

  if (editedPetIndex === -1) {
    throw new Error('Pet não encontrado no tutor.');
  }

  tutor.pets[editedPetIndex] = { ...tutor.pets[editedPetIndex], ...petData };
  const editedTutor = await tutor.save();
  return editedTutor;
};
