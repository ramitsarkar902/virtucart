import axios from "axios";
import { LoginProp, SignupProp } from "../services/Props";
import {
  storeBestSellingProduct,
  storeNewlyLaunchedProducts,
  storeProduct,
  storeProducts,
} from "../store/productsSlice";
import {
  storeBestSellingService,
  storeNewlyLaunchedServices,
  storeServices,
} from "../store/serviceSlice";
import { storeToken, storeUserData } from "../store/userSlice";
import { api_url } from "./helper";

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

export const getProductsByCategory = async (
  dispatch: any,
  category: string
) => {
  try {
    const res = await axios.get(`${api_url}/products/category/${category}`);
    dispatch(storeProducts(res.data));
  } catch (error: any) {
    return error.response.data;
  }
};
export const getBestSellingService = async (dispatch: any) => {
  try {
    const res = await axios.get(`${api_url}/services/best/service`);
    dispatch(storeBestSellingService(res.data));
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getNewlyLaunchedService = async (dispatch: any) => {
  try {
    const res = await axios.get(`${api_url}/services/new/services`);
    dispatch(storeNewlyLaunchedServices(res.data));
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getServices = async (dispatch: any) => {
  try {
    const res = await axios.get(`${api_url}/services/all/services`);
    dispatch(storeServices(res.data));
  } catch (error: any) {
    return error.response.data;
  }
};

export const getProductInfo = async (dispatch: any, id: string) => {
  try {
    const res = await axios.get(`${api_url}/products/${id}`);
    dispatch(storeProduct(res.data));
    return res.status;
  } catch (error: any) {
    return error.response.data;
  }
};
