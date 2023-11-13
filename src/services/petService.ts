import TutorModel, { Tutor, Pet } from '../models/vetclinic';

export const createPet = async (
  tutorId: string,
  petData: Partial<Pet>,
): Promise<Tutor | null> => {
  const tutor = await TutorModel.findById(tutorId);

  if (!tutor) {
    throw new Error('Tutor not found.');
  }

  const newPet: Pet = {
    name: petData.name || '',
    species: '',
    carry: '',
    weight: 0,
    date_of_birth: '',
  };

  tutor.pets.push(newPet);

  const updatedTutor = await TutorModel.findByIdAndUpdate(
    tutorId,
    { $set: { pets: tutor.pets } },
    { new: true },
  );

  return updatedTutor;
};

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
export const deletePet = async (
  petId: string,
  tutorId: string,
): Promise<string | null> => {
  const tutor = await TutorModel.findById(tutorId);

  if (!tutor) {
    throw new Error('Tutor not found.');
  }

  const deletedPetIndex = tutor.pets.findIndex((pet) => pet.id === petId);

  if (deletedPetIndex === -1) {
    throw new Error('Pet not found in Tutor.');
  }

  tutor.pets.splice(deletedPetIndex, 1);

  const deletedPet = await TutorModel.findByIdAndUpdate(
    tutorId,
    { $set: { pets: tutor.pets } },
    { new: true },
  );

  if (deletedPet) {
    return `Tutor with ID ${tutorId} deleted successfully.`;
  } else {
    return null;
  }
};
