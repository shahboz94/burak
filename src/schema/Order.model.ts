import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const orderSchema = new Schema(
  {
    orderTotal: {
      type: Number,
      required: true,
    },

    orderDelivery: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      enum: OrderStatus,
      default: OrderStatus.PAUSE,
    },

    memberId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Member", //reference
    },
  },
  { timestamps: true } //createdAt → qachon yaratilganini . updatedAt → qachon o‘zgartirilganini kuzatib boramiz.
);

export default mongoose.model("Order", orderSchema);
