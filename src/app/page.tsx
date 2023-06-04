"use client";
import { products } from "../data/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 px-10 py-16">
      <h1 className="text-center text-black text-3xl font-bold tracking-wider">
        Browse products
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-5 my-20">
        {products.map((product) => (
          <div
            className="md:max-w-sm max-w-lg rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
            key={product.id}
          >
            <img
              className="w-full h-48 object-cover"
              src={product.thumbnail}
              alt="Product Thumbnail"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base line-clamp-2">
                {product.description}
              </p>
              <div className="flex flex-row items-center justify-between py-4">
                <p className="text-gray-900 text-xl mt-2">
                  ₹ {Intl.NumberFormat().format(product.price)}
                </p>
                <button className="bg-gray-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed right-0 top-0 h-screen w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex flex-row items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Cart</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col space-y-4">
            {products.map((product) => (
              <div
                className="flex items-center justify-between"
                key={product.id}
              >
                <div className="flex items-center space-x-2">
                  <img
                    className="h-10 w-10"
                    src={product.thumbnail}
                    alt="Product 1"
                  />
                  <span className="font-semibold line-clamp-1">
                    {product.name}
                  </span>
                </div>
                <span className="font-semibold line-clamp-1">
                  ₹ {Intl.NumberFormat().format(product.price)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="font-bold text-lg my-3">
              Total: ₹ {Intl.NumberFormat().format(120000)}
            </p>
            <button className="bg-gray-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
