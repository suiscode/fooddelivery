import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

export { connectToDb };
