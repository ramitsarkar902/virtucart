import { createError } from "../error.js";
import Product from "../models/Products.js";
import User from "../models/User.js";

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

export const getProductByPrice = async (req, res, next) => {
  try {
    const { upperLimit, lowerLimit } = req.body;
    const r = await Product.find({
      discountedPrice: { $gte: lowerLimit, $lte: upperLimit },
    });
    res.status(200).json(r);
  } catch (error) {
    next(error);
  }
};

export const getProductByRating = async (req, res, next) => {
  try {
    const { upperLimit, lowerLimit } = req.body;
    const r = await Product.find({
      rating: { $gte: lowerLimit, $lte: upperLimit },
    });
    res.status(200).json(r);
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
        $limit: 4,
      },
    ]);
    res.status(200).json(a);
  } catch (error) {
    next(error);
  }
};

export const productSold = async (req, res, next) => {
  try {
    req.body.products.map(async (p) => {
      const a = await Product.findById(p);

      if (a.stock <= 0)
        return res.status(404).json("Product Currently Unavailable!");

      await Product.findByIdAndUpdate(p, {
        $inc: { sales: 1, stock: -1 },
      });
      await User.findByIdAndUpdate(req.body.userId, {
        $push: {
          productOrders: {
            _id: p,
            title: a.title,
            price: a.discountedPrice,
            brand: a.brand,
            thumbnail: a.thumbnail,
            date: Date.now(),
          },
        },
      });
    });

    res.status(200).json("Products confirmed!");
  } catch (error) {
    next(error);
  }
};
