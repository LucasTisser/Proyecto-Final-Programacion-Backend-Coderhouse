import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  productos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productos",
    },
  ],
});

export const CarritosModel = mongoose.model("carritos", Schema);
