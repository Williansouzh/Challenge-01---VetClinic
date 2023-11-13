import mongoose, { Schema, Document } from 'mongoose';

export interface Pet {
  id?: string;
  name: string;
  species: string;
  carry: string;
  weight: number;
  date_of_birth: string;
}

export interface Tutor extends Document {
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zipCode: string;
  pets: Pet[];
}

const petSchema = new Schema<Pet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  carry: { type: String, required: true },
  weight: { type: Number, required: true },
  date_of_birth: { type: String, required: true },
});

const tutorSchema = new Schema<Tutor>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    zipCode: { type: String, required: true },
    pets: { type: [petSchema], default: [] },
  },
  { strict: false },
);

const TutorModel = mongoose.model<Tutor>('tutors', tutorSchema, 'tutors');

export default TutorModel;
