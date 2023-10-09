import { createSlice } from "@reduxjs/toolkit";
import { BestSellingService, NewlyLauncedServices } from "../services/Props";

interface InitialProp {
  bestSellingService: Array<BestSellingService>;
  newlyLaunchedServices: Array<NewlyLauncedServices>;
}

const initialState: InitialProp = {
  bestSellingService: [],
  newlyLaunchedServices: [],
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    storeBestSellingService: (state, action) => {
      state.bestSellingService = action.payload;
    },
    storeNewlyLaunchedServices: (state, action) => {
      state.newlyLaunchedServices = action.payload;
    },
  },
});

export const { storeBestSellingService, storeNewlyLaunchedServices } =
  serviceSlice.actions;

export default serviceSlice.reducer;
