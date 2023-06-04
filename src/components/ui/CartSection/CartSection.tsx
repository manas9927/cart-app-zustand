import React from "react";
import CloseIcon from "@/assets/svgs/CloseIcon";
import useCartStore from "@/store/store";
import { useRouter } from "next/navigation";

interface CartSectionProps {
  onClose: React.MouseEventHandler<SVGSVGElement>;
}

const CartSection: React.FC<CartSectionProps> = ({ onClose }) => {
  const router = useRouter();
  const { items, totalPrice } = useCartStore();

  const handleOpenCartPage = () => {
    router.push("/cart");
  };
  return (
    <div className="fixed right-0 top-0 h-screen w-64 bg-white shadow-lg">
      <div className="p-4">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Cart</h2>
          {/* <CloseIcon onClick={onClose} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer stroke-gray-800 hover:stroke-gray-900"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex flex-col space-y-4">
          {items.map((product) => (
            <div className="flex items-center justify-between" key={product.id}>
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
            {items.length < 1
              ? `Cart is empty`
              : `Total: ₹ ${Intl.NumberFormat().format(totalPrice)}`}
          </p>
          <button
            className={`bg-gray-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg w-full ${
              items.length < 1 && "cursor-not-allowed"
            }`}
            onClick={handleOpenCartPage}
            disabled={items.length < 1}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
