"use client";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "../data/products";
import CartSection from "@/components/ui/CartSection";
import { useState } from "react";
import CartIcon from "@/assets/svgs/CartIcon";
import { Product } from "@/definitions/Product";
import useCartStore from "@/store/store";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addItem, items } = useCartStore();

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = (productToAdd: Product) => {
    addItem(productToAdd);
    setIsCartOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-10 py-16">
      <h1 className="text-center text-black text-3xl font-bold tracking-wider">
        Browse products
      </h1>
      <div className="fixed right-0 top-0 mx-10 my-16">
        {/* <CartIcon onClick={handleOpenCart} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer stroke-gray-800 hover:stroke-gray-900"
          onClick={handleOpenCart}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-5 my-20">
        {products.map((product) => (
          <ProductCard
            data={product}
            key={product.id}
            addToCart={() => {
              handleAddToCart(product);
            }}
          />
        ))}
      </div>
      {isCartOpen && <CartSection onClose={handleCloseCart} />}
    </main>
  );
}
