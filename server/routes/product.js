import express from "express";
import {
  create,
  deleteProduct,
  geta,
  getall,
  getProductByCategory,
} from "../controllers/products.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteProduct);

router.get("/:id", verifyToken, geta);

router.get("/category/:id", verifyToken, getProductByCategory);

router.get("/all/products", verifyToken, getall);

router.post("/", create);

export default router;
