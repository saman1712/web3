export type CategoryId =
  | "discounts"
  | "italian"
  | "american"
  | "combo"
  | "stromboli"
  | "burger"
  | "diet"
  | "sandwich"
  | "fried"
  | "kids"
  | "mixmeal"
  | "lahmacun"
  | "appetizer"
  | "drink"
  | "extra";

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice: number | null;
  discount: number | null;
  category: CategoryId;
  image: string;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface Address {
  mode: "delivery" | "pickup";
  street: string;
  details: string;
  branchName?: string;
}

export interface User {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  username: string;
  birthDate: string;
  gender: "" | "male" | "female";
}

export interface Coupon {
  id: number;
  title: string;
  description: string;
}
