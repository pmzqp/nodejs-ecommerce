import { Category } from "../category/Category";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  price: number;
  updatedAt: Date;
};
