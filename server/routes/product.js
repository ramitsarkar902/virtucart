import express from "express";
import {
  create,
  deleteProduct,
  getBestProduct,
  getNewProducts,
  getProductByCategory,
  geta,
  getall,
  productSold,
} from "../controllers/products.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteProduct);

router.get("/:id", geta);

router.get("/category/:id", getProductByCategory);

router.get("/all/products", getall);

router.post("/", create);

router.get("/best/product", getBestProduct);

router.get("/new/products", getNewProducts);

router.post("/sell/:id",verifyToken, productSold);

export default router;
