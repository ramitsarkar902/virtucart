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
      const productToAdd = action.payload;
      const existingProduct = state.products.find(
        (p) => p._id === productToAdd._id
      );
      if (existingProduct) existingProduct.quantity += 1;
      else {
        state.products.push({
          ...productToAdd,
          quantity: 1,
        });
      }
    },
    addCartServices: (state, action) => {
      const serviceToAdd = action.payload;
      const existingService = state.services.find(
        (p) => p._id === serviceToAdd._id
      );
      if (existingService) existingService.quantity += 1;
      else {
        state.services.push({
          ...serviceToAdd,
          quantity: 1,
        });
      }
    },
    removeCartService: (state, action) => {
      const serviceIdToRemove = action.payload;
      const serviceIndex = state.services.findIndex(
        (p) => p._id === serviceIdToRemove
      );

      if (serviceIndex !== -1) {
        if (state.services[serviceIndex].quantity > 1) {
          state.services[serviceIndex].quantity--;
        } else {
          state.services = state.services.filter(
            (p) => p._id !== serviceIdToRemove
          );
        }
      }
    },
    removeCartProduct: (state, action) => {
      const productIdToRemove = action.payload;
      const productIndex = state.products.findIndex(
        (p) => p._id === productIdToRemove
      );

      if (productIndex !== -1) {
        if (state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity--;
        } else {
          state.products = state.products.filter(
            (p) => p._id !== productIdToRemove
          );
        }
      }
    },
    addCost: (state, action) => {
      state.totalCost = state.totalCost + action.payload;
    },
    removeCost: (state, action) => {
      state.totalCost = state.totalCost - action.payload;
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
} = cartSlice.actions;

export default cartSlice.reducer;
