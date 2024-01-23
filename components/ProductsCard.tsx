"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeartCirclePlus, FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import { ProductType } from "@/types/ProductTypes";
import AddToCart from "@/app/(shoppingcart)/components/ui/AddToCart";
import formatPrice from "@/utils/formatPrice";
import AddToWishlistButton from "@/app/(wishlist)/components/AddToWishlistButton";

const ProductsCard = ({ product }: { product: ProductType }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const isSizeSelected = selectedSize !== "";

  const showToast = () => {
    toast.error("Please choose a color first");
  };
  return (
    <div className=" relative flex flex-col items-center product-card">
      <div className="relative group">
        <div className="product-image flex justify-center items-center mb-2">
          <Image
            src={product.image}
            width={300}
            height={300}
            alt={`image of ${product.name}`}
            className=" object-contain w-[300px] h-[300px]"
          />
        </div>
        <div className="hidden absolute top-5 items-center justify-center group-hover:flex flex-col gap-3">
          <button className="mx-2 bg-gray-900 border text-white p-2 rounded-md hover:bg-gray-900/75">
            <AddToWishlistButton
              name={product.name}
              image={product.image}
              id={product.id}
              unit_amount={product.unit_amount}
              quantity={product.quantity}
            />
          </button>
          <button className="mx-2 bg-gray-900 border text-white p-2 rounded-md hover:bg-gray-900/75">
            <FaEye />
          </button>
        </div>
      </div>
      <h3 className="font-bold tracking-wide">{product.name}</h3>
      <span>{formatPrice(product.unit_amount)}</span>
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="my-2 p-2 border rounded-md"
      >
        <option value="">Select Color</option>
        <option value="small">White</option>
        <option value="medium">Black</option>
        <option value="large">Red</option>
      </select>

      <AddToCart
        name={product.name}
        image={product.image}
        price={product.unit_amount}
        id={product.price_id!}
        sizeSelect={isSizeSelected}
        size={selectedSize}
        onClick={!isSizeSelected ? showToast : undefined}
        currency="USD"
      />
    </div>
  );
};

export default ProductsCard;
