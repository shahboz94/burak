import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductServise from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductServise();

const productController: T = {};
/** SPA */

/** SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts ");
    const data = await productService.getAllProducts();
    console.log("data:", data);

    res.render("products", { products: data });
  } catch (err) {
    console.error("Error, getAllProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct ");

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      // yonalish
      return ele.path.replace(/\\/g, "/"); //windossdagi muamoni togrilaydi
    });

    await productService.createNewProduct(data); //Bu qator – productService nomli servis klassidagi createNewProduct() degan metodni chaqiryapti, va unga data nomli obyekt yuboryapti.

    res.send(
      // cilentga javob yollayapti.
      `<script> alert("Sucessful creation"); window.location.replace('admin/product/all')</script>`
    );
  } catch (err) {
    console.error("Error, createNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/product/all')</script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  // define
  try {
    console.log("updateChosenProduct ");
    const id = req.params.id; // Bu kod URL orqali yuborilgan mahsulot ID sini olib, id degan o‘zgaruvchiga saqlaydi.

    const result = await productService.updateChosenProduct(id, req.body);

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.error("Error, updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
export default productController;
