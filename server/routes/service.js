import express from "express";
import {
  create,
  deleteServive,
  getBestServive,
  getNewServives,
  getServiveByCategory,
  geta,
  getall,
  serviveSold,
} from "../controllers/products.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteService);

router.get("/:id", geta);

router.get("/category/:id", getServiceByCategory);

router.get("/all/products", getall);

router.post("/", create);

router.get("/best/product", getBestService);

router.get("/new/products", getNewServices);

router.post("/sell/:id", verifyToken, serviceSold);

export default router;
