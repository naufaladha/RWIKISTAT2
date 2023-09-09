// lib/dbConnect.ts
import mongoose, { Connection } from "mongoose";
import { createModel } from "mongoose-gridfs";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/online-r-compiler";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

let gfs: ReturnType<typeof createModel> | undefined;

mongoose.connection.once("open", () => {
  gfs = createModel();
});

export { gfs };
export default connectDB;
