import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import Product from "../models/Products.js";

export const create = async (req, res, next) => {
  try {
    const n = new Product({ ...req.body });
    await n.save();
    res.status(200).json("Products Created");
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};

export const geta = async (req, res, next) => {
  try {
    const a = await Product.findById(req.params.id);
    res.status(200).json(a);
  } catch (error) {
    next(error);
  }
};

export const getall = async (req, res, next) => {
  try {
    const a = await Product.find({});
    res.status(200).json(a);
  } catch (error) {
    next(error);
  }
};

export const getProductByCategory = async (req, res, next) => {
  try {
    const a = await Product.find({
      category: req.params.id,
    });
    res.status(200).json(a);
  } catch (error) {
    next(error);
  }
};

export const getBestProduct = async (req, res, next) => {
  try {
    const a = await Product.aggregate([
      { $sort: { sales: -1 } },
      {
        $limit: 1,
      },
    ]);
    res.status(200).json(a);
  } catch (error) {
    next(error);
  }
};

export const getNewProducts = async (req, res, next) => {
  try {
    const a = await Product.aggregate([
      { $sort: { createdAt: -1 } },
      {
        $limit: 5,
      },
    ]);
    res.status(200).json(a);
  } catch (error) {
    next(error);
  }
};
