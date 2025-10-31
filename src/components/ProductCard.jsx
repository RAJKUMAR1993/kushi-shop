import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FaPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };

  // handle different image shapes (array or string) and safe price formatting
  const imageSrc = Array.isArray(product?.images)
    ? product.images[0]
    : product?.images || "/src/assets/images/placeholder.png";

  const price = Number(product?.price || 0);
  const discountPrice = Number(product?.discountPrice || 0);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative p-3 mt-2 pb-6 hover:shadow-lg transition-shadow duration-200">
      {/* Image */}
      <div className="h-48 flex items-center justify-center bg-gray-50 rounded">
        <img
          src={imageSrc}
          alt={product?.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Badge for discount */}
      {discountPrice > 0 && (
        <div className="absolute left-3 top-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
          -{Math.round(((price - discountPrice) / price) * 100)}%
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-sm md:text-base font-semibold line-clamp-2">
          {product?.title}
        </h3>

        <div className="mt-2 flex items-end justify-between">
          <div>
            {discountPrice > 0 ? (
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  ${discountPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            )}
            <p className="text-xs text-gray-500 mt-1">
              {product?.category || ""}
            </p>
          </div>

          {/* Rating */}
          <div className="hidden sm:flex items-center text-xs text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = i < Math.round(product?.rating || 0);
              return (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    filled ? "text-yellow-400" : "text-gray-200"
                  } mr-1`}
                  viewBox="0 0 20 20"
                  fill={filled ? "currentColor" : "none"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
                </svg>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add to cart button */}
      <button
        type="button"
        onClick={(e) => handleAddToCart(e, product)}
        aria-label={`Add ${product?.title} to cart`}
        title={`Add ${product?.title} to cart`}
        className="absolute right-3 bottom-3 w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg transform hover:-translate-y-0.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        <FaPlus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProductCard;
