import express from "express";
import {
  create,
  deleteProduct,
  getBestProduct,
  getNewProducts,
  getProductByCategory,
  geta,
  getall,
} from "../controllers/products.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteProduct);

router.get("/:id", verifyToken, geta);

router.get("/category/:id", verifyToken, getProductByCategory);

router.get("/all/products", verifyToken, getall);

router.post("/", create);

router.get("/best/product", getBestProduct);

router.get("/new/products", getNewProducts);

export default router;
