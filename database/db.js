import mongoose from "mongoose";
import { NODE_ENV, MONGODB_URI } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env<development/production>.local"
  );
}

const connectToDatabse = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabse;
