import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { mockData } from "../assets/MockData";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log(products.products, "::12");
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <>
      <div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>

          <div className="container mx-auto px-4 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
              {products.products.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden relative p-4"
                >
                  <div className="h-56 flex items-center justify-center">
                    <img
                      src={product?.images}
                      alt={product?.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{product?.title}</h3>
                    <p className="text-gray-500 mt-1">
                      ${product?.price.toFixed(2)}
                    </p>

                    <div className="flex items-center mt-3">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const filled = i < Math.round(product?.rating || 0);
                          return (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                filled ? "text-yellow-400" : "text-gray-300"
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

                  <button className="absolute right-4 bottom-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-700  cursor-pointer">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
