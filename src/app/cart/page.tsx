"use client";
import React, { useEffect } from "react";
import ArrowLeft from "@/assets/svgs/ArrowLeft";
import useCartStore from "@/store/store";
import Head from "next/head";
import { useRouter } from "next/navigation";
import HomeIcon from "@/assets/svgs/HomeIcon";
import { Product } from "@/definitions/Product";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
  const router = useRouter();
  const { items, removeItem, totalPrice } = useCartStore();

  useEffect(() => {
    items.length < 1 && handleOpenHomePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleGoBack = () => {
    router.back();
  };

  const handleOpenHomePage = () => {
    router.push("/");
  };

  const handleRemoveItem = (productToRemove: Product) => {
    removeItem(productToRemove);
  };

  return (
    <>
      <Head>
        <title>Cart Page</title>
      </Head>
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
        <div className="max-w-3xl mx-auto p-8">
          <div className="flex flex-row items-center mb-16">
            {/* <ArrowLeft onClick={handleGoBack} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer stroke-gray-800 hover:stroke-gray-900"
              onClick={handleGoBack}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <h1 className="text-black text-3xl font-bold tracking-wider ml-4">
              Cart
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {items.map((product) => (
              <div className="border rounded-lg shadow-md p-4" key={product.id}>
                <img
                  className="w-full mb-4 h-48 object-cover"
                  src={product.thumbnail}
                  alt={product.name}
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold text-base">
                    ₹ {Intl.NumberFormat().format(product.price)}
                  </span>
                </p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    handleRemoveItem(product);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="fixed bottom-40 right-72">
            <p className="my-2 font-semibold">
              Items total: ₹ {Intl.NumberFormat().format(totalPrice)}
            </p>
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
