import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
