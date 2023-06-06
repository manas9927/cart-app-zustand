"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { products } from "@/data/products";
import CartSection from "@/components/ui/CartSection";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/store";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = ({ params }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const { addItem } = useCartStore();

  const productData = products.find((product) => product.id === params.id);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = () => {
    productData && addItem(productData);
    setIsCartOpen(true);
  };

  const handleOpenHomePage = () => {
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-10 py-16">
      <div className="fixed left-0 top-0 mx-10 my-16">
        {/* <HomeIcon onClick={handleOpenHomePage} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer stroke-gray-800 hover:stroke-gray-900"
          onClick={handleOpenHomePage}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
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
      <div className="max-w-3xl mx-auto flex">
        <div className="w-1/2 p-8">
          <img
            className="w-full"
            src={productData?.images[1]}
            alt="Product Image"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">{productData?.name}</h2>
          <p className="text-gray-700 mb-4">{productData?.description}</p>
          <p className="text-gray-900 text-xl mb-4">
            ₹{" "}
            {productData?.price &&
              Intl.NumberFormat().format(productData.price)}
          </p>
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {isCartOpen && <CartSection onClose={handleCloseCart} />}
    </main>
  );
};

export default ProductPage;
