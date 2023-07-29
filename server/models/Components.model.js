import mongoose, { Schema, model } from "mongoose";

const componentSchema = new Schema({
  image: { type: String, required: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  keyFeatures: {
    type: Object,
    required: true,
  },
  individualRating: { type: Number, required: true },
  averageRating: { type: Number, required: true },
  reviews: [
    {
      username: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      date: { type: Date, required: true },
    },
  ],
});

mongoose.models = {};

const Component = model("Component", componentSchema);

export default Component;
