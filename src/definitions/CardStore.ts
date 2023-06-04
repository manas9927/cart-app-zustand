import { Product } from "./Product";

export type CartStore = {
  items: Product[];
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  clearCart: () => void;
};
