import { createSlice } from "@reduxjs/toolkit";
import { UserDets } from "../services/Props";

interface InitialProp {
  isLoggedIn: boolean;
  userData: Array<UserDets>;
}

const initialState: InitialProp = {
  isLoggedIn: false,
  userData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    storeUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setIsLoggedIn, storeUserData } = userSlice.actions;

export default userSlice.reducer;
