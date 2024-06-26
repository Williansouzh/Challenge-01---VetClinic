import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_DATABASE,
  MONGODB_OPTIONS,
} = process.env;

if (
  !MONGODB_USER ||
  !MONGODB_PASSWORD ||
  !MONGODB_CLUSTER ||
  !MONGODB_DATABASE
) {
  console.error('Incomplete MongoDB configuration. Check your .env file.');
  process.exit(1);
}

const mongoDBURL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE}${MONGODB_OPTIONS}`;

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoDBURL);
    console.log('Connected to MongoDB');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB:', error.message);
    } else {
      console.error(
        'An unknown error occurred while connecting to MongoDB:',
        error,
      );
    }
    process.exit(1);
  }
}

export default connectToMongoDB;
