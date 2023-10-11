import { createSlice } from "@reduxjs/toolkit";
import { ProductsProp, ServicesProp } from "../services/Props";

interface InitialProp {
  products: Array<ProductsProp>;
  services: Array<ServicesProp>;
  totalCost: number;
}

const initialState: InitialProp = {
  products: [],
  services: [],
  totalCost: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    storeCartProducts: (state, action) => {
      state.products = action.payload;
    },
    storeCartServices: (state, action) => {
      state.services = action.payload;
    },
    addCartProducts: (state, action) => {
      state.products.push(action.payload);
    },
    clearCartProducts: (state) => {
      state.products = [];
    },
    clearCartServices: (state) => {
      state.services = [];
    },
    addCartServices: (state, action) => {
      state.services.push(action.payload);
    },
    removeCartService: (state, action) => {
      state.services = state.services.filter(
        (service) => service._id !== action.payload
      );
    },
    removeCartProduct: (state, action) => {
      state.products = state.products.filter(
        (service) => service._id !== action.payload
      );
    },
    addCost: (state, action) => {
      const res = state.totalCost + action.payload;
      state.totalCost = res;
    },
    clearCost: (state) => {
      state.totalCost = 0;
    },
    removeCost: (state, action) => {
      const res = Number((state.totalCost - action.payload).toFixed(2));
      state.totalCost = res;
    },
  },
});

export const {
  storeCartProducts,
  storeCartServices,
  addCartProducts,
  addCartServices,
  removeCartProduct,
  removeCartService,
  addCost,
  removeCost,
  clearCartProducts,
  clearCartServices,
  clearCost,
} = cartSlice.actions;

export default cartSlice.reducer;
