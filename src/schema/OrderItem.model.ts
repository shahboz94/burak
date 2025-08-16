import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema(
  {
    itemQuantity: {
      type: Number,
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true, collection: "orderItems" } // lowercase qilmaslik //createdAt → qachon yaratilganini . updatedAt → qachon o‘zgartirilganini kuzatib boramiz.
);

export default mongoose.model("OrderItem", orderItemSchema);
