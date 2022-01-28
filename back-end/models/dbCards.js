import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
  {
    name: String,
    imgUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("cards", cardSchema);
