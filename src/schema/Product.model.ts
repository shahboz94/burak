import mongoose, { Schema } from "mongoose";
import {
  ProductColection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    ProductStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productColection: {
      type: String,
      enum: ProductColection,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },
    productVolume: {
      type: String,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },
    productDesc: {
      type: String,
      required: true,
    },
    productImages: {
      type: [String],
      default: [],
    },
    productViews: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

productSchema.index(
  { productName: 1, productSize: 1, productVolume: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema); // mongusda modul degan mezet orqali schema modelini hosil qiladi va sharli ravishda 'member' atab yuqoridagi memberschemani argument sifatida olamiz. // shu orqali modelga aylandi
