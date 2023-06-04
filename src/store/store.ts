import { CartStore } from "@/definitions/CardStore";
import { create } from "zustand";

const useCartStore = create<CartStore>((set) => ({
  items: [],
  totalPrice: 0,
  addItem: (product) => {
    set((state) => {
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return state;
      }
      return {
        items: [...state.items, product],
        totalPrice: state.totalPrice + product.price,
      };
    });
  },
  removeItem: (product) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== product.id),
      totalPrice: state.totalPrice - product.price,
    }));
  },
  clearCart: () => {
    set({ items: [], totalPrice: 0 });
  },
}));

export default useCartStore;
