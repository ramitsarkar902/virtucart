import { storeBestSellingProduct } from "../store/productsSlice";
import {
  setActive,
  setIsLoggedIn,
  storeToken,
  storeUserData,
} from "../store/userSlice";

export const Logout = (dispatch: any, navigate: any) => {
  dispatch(setIsLoggedIn(false));
  dispatch(setActive(2));
  dispatch(storeUserData([]));
  dispatch(storeToken(""));
  navigate("/");
};
