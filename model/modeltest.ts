import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model("Test", testSchema);
export default Test;
