import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    providedBy:{
        type:String,
    },
    rating: {
      type: Number,
    },
    category: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    sales: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ServiceSchema);
