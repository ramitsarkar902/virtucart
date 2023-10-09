import { createSlice } from "@reduxjs/toolkit";
import {
  BestSellingProduct,
  NewlyLauncedProducts,
  ProductsProp,
} from "../services/Props";

interface InitialProp {
  bestSellingProduct: Array<BestSellingProduct>;
  newlyLaunchedProducts: Array<NewlyLauncedProducts>;
  products: Array<ProductsProp>;
}

const initialState: InitialProp = {
  bestSellingProduct: [],
  newlyLaunchedProducts: [],
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeBestSellingProduct: (state, action) => {
      state.bestSellingProduct = action.payload;
    },
    storeNewlyLaunchedProducts: (state, action) => {
      state.newlyLaunchedProducts = action.payload;
    },
    storeProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  storeBestSellingProduct,
  storeNewlyLaunchedProducts,
  storeProducts,
} = productSlice.actions;

export default productSlice.reducer;
