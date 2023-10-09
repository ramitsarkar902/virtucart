import { createSlice } from "@reduxjs/toolkit";
import {
  BestSellingService,
  NewlyLauncedServices,
  ServicesProp,
} from "../services/Props";

interface InitialProp {
  bestSellingService: Array<BestSellingService>;
  newlyLaunchedServices: Array<NewlyLauncedServices>;
  services: Array<ServicesProp>;
}

const initialState: InitialProp = {
  bestSellingService: [],
  newlyLaunchedServices: [],
  services: [],
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
    storeServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const {
  storeBestSellingService,
  storeNewlyLaunchedServices,
  storeServices,
} = serviceSlice.actions;

export default serviceSlice.reducer;
