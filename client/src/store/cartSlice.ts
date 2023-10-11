import { createSlice } from "@reduxjs/toolkit";
import { ProductsProp, ServicesProp } from "../services/Props";

interface InitialProp {
  products: Array<ProductsProp>;
  services: Array<ServicesProp>;
}

const initialState: InitialProp = {
  products: [],
  services: [],
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
  },
});

export const {
  storeCartProducts,
  storeCartServices,
  addCartProducts,
  addCartServices,
  removeCartProduct,
  removeCartService,
} = cartSlice.actions;

export default cartSlice.reducer;
