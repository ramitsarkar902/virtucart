import { createSlice } from "@reduxjs/toolkit";
import { BestSellingProduct } from "../services/Props";

interface InitialProp {
bestSellingProduct:Array<BestSellingProduct>;
}

const initialState: InitialProp = {
bestSellingProduct:[],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeBestSellingProduct: (state, action) => {
      state.bestSellingProduct = action.payload;
    },
  },
});

export const { storeBestSellingProduct } = productSlice.actions;

export default productSlice.reducer;
