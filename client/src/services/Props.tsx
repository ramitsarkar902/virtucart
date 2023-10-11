export interface SignupProp {
  name: string;
  email: string;
  password: string;
}
export interface LoginProp {
  email: string;
  password: string;
}

export interface UserDets {
  _id: string;
  name: string;
  img: string;
  email: string;
}

export interface BestSellingProduct {
  _id: string;
  title: string;
  description: string;
  originalPrice:number;
  discountedPrice:number;
  brand: string;
  thumbnail: string;
}

export interface NewlyLauncedProducts {
  _id: string;
  title: string;
  description: string;
  brand: string;
  thumbnail: string;
}

export interface ProductsProp {
  _id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  about:[];
  box:[];
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
  createdAt: string;
  updatedAt: string;
}

export interface ServicesProp {
  _id: string;
  title: string;
  description: string;
  price: number;
  about:[];
  box:[];
  rating: number;
  stock: number;
  providedBy: string;
  category: string;
  thumbnail: string;
  images: [];
  createdAt: string;
  updatedAt: string;
}

export interface BestSellingService {
  _id: string;
  title: string;
  description: string;
  price:number;
  providedBy: string;
  thumbnail: string;
}

export interface NewlyLauncedServices {
  _id: string;
  title: string;
  description: string;
  providedBy: string;
  thumbnail: string;
}
