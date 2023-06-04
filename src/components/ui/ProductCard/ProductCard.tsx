import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "../../../definitions/Product";

interface ProductCardProps {
  data: Product;
  addToCart: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, addToCart }) => {
  const router = useRouter();

  const handleOpenProductPage = () => {
    router.push(`/product/${data.id}`);
  };
  return (
    <div
      className="md:max-w-sm max-w-lg rounded-lg overflow-hidden shadow-md hover:shadow-lg"
      key={data.id}
    >
      <img
        className="w-full h-48 object-cover cursor-pointer"
        src={data.thumbnail}
        alt={data.name}
        onClick={handleOpenProductPage}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name}</div>
        <p className="text-gray-700 text-base line-clamp-2">
          {data.description}
        </p>
        <div className="flex flex-row items-center justify-between py-4">
          <p className="text-gray-900 text-xl mt-2">
            ₹ {Intl.NumberFormat().format(data.price)}
          </p>
          <button
            className="bg-gray-900 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
