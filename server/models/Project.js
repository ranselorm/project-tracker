import mongoose, { Mongoose } from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Not Started",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Sets the current date and time when a document is created
  },
});

export default mongoose.model("Project", ProjectSchema);
