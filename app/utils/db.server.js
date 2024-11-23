import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
};
