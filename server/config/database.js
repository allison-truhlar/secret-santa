import mongoose from "mongoose";

const port = process.env.API_PORT;
const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log(`database connected on port ${port}`);
  } catch (error) {
    console.log(error);
  }
};
