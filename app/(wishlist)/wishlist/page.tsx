"use client";

import { useWishlistStore } from "@/store/useWishlistStore";
import Image from "next/image";
import AddToCart from "@/app/(shoppingcart)/components/ui/AddToCart";
const page = () => {
  const wishlistStore = useWishlistStore();
  return (
    <div className="py-20">
      <div className="main-container">
        {wishlistStore.wishList.length > 0 ? (
          <>
            <span className="font-bold">
              You have {wishlistStore.wishList.length} items
              in your wishlist
            </span>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
              {wishlistStore.wishList.map((product) => (
                <div key={product.id} className='product-card'> 
                <div className="product-image flex justify-center items-center mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain w-[300px] h-[300px]"
                  />
                </div>
                  <h1 className="font-bold">
                    {product.name}
                  </h1>
                  <div className="flex gap-3">
                    <AddToCart
                      name={product.name}
                      image={product.image}
                      price={product.unit_amount}
                      id={product.price_id!}
                      currency="USD"
                    />
                    <button
                      onClick={() =>
                        wishlistStore.removeFromWishlist({
                          ...product,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full  flex justify-center items-center">
            <h1 className="font-bold text-xl">
              Your Wishlist is empty
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
