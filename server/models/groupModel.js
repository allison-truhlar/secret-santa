import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new Schema({ name: String });

export const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    members: [{ type: memberSchema, required: true }],
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

export const Group = mongoose.model("Group", groupSchemaSchema);
