import mongoose from "mongoose";
const { Schema } = mongoose;

export const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    members: [{ name: String }],
    matches: [
      {
        year: Number,
        assignments: [
          {
            giver: String,
            receiver: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

export default Group;
