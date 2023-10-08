import { createSlice } from "@reduxjs/toolkit";
import { BestSellingProduct, NewlyLauncedProducts } from "../services/Props";

interface InitialProp {
bestSellingProduct:Array<BestSellingProduct>;
newlyLaunchedProducts:Array<NewlyLauncedProducts>;
}

const initialState: InitialProp = {
bestSellingProduct:[],
newlyLaunchedProducts:[], 
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
    
  },
});

export const { storeBestSellingProduct,storeNewlyLaunchedProducts } = productSlice.actions;

export default productSlice.reducer;
