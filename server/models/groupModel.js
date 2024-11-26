import mongoose from "mongoose";
const { Schema } = mongoose;

export const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    members: [String],
    matches: [
      {
        year: Number,
        assignments: [
          {
            giverId: String,
            receiverId: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

export default Group;
