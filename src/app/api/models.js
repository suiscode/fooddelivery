import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    foodId: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const foodSchema = new Schema({
  foodImage: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodOnSale: {
    type: Boolean,
    default: false,
  },
  foodPrice: {
    type: Number,
    required: true,
  },
  foodRecipe: {
    type: String,
    required: true,
  },
  foodSalePrice: {
    type: Number,
  },
});

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
