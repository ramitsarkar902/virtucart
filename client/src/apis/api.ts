import axios from "axios";
import { api_url } from "./helper";
import { LoginProp, SignupProp } from "../services/Props";
import { storeToken, storeUserData } from "../store/userSlice";
import {
  storeBestSellingProduct,
  storeNewlyLaunchedProducts,
} from "../store/productsSlice";

export const SignupApi = async (formDets: SignupProp) => {
  try {
    const res = await axios.post(`${api_url}/auth/signup`, {
      name: formDets.name,
      email: formDets.email,
      password: formDets.password,
    });
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};
export const LoginApi = async (formDets: LoginProp, dispatch: any) => {
  try {
    const res = await axios.post(`${api_url}/auth/signin`, {
      email: formDets.email,
      password: formDets.password,
    });
    dispatch(storeUserData(res.data.userData));
    dispatch(storeToken(res.data.token));
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getBestSellingProd = async (dispatch: any) => {
  try {
    const res = await axios.get(`${api_url}/products/best/product`);
    dispatch(storeBestSellingProduct(res.data));
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getNewlyLaunchedProd = async (dispatch: any) => {
  try {
    const res = await axios.get(`${api_url}/products/new/products`);
    dispatch(storeNewlyLaunchedProducts(res.data));
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};
