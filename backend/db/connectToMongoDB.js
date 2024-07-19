import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.CONNECT_DB_URI);
    console.log("DB was connected successfuly");
  } catch (error) {
    console.log(error.message);
  }
}
