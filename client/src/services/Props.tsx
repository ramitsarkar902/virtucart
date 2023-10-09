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
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
  createdAt: string;
  updatedAt: string;
}
