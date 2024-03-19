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
      type: [Schema.Types.ObjectId],
      required: true,
      ref:'Food'
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
    type: String,
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

const orderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
      unique: true,
    },
    foods: {
      type: [
        {
          _id: Schema.Types.ObjectId,
          foodImage: String,
          foodName: String,
          foodOnSale: Boolean,
          foodPrice: String,
          foodRecipe: String,
          foodSalePrice: Number,
          amount: Number,
        },
      ],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    process: {
      type: Boolean,
      required: true,
      default: false,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);
