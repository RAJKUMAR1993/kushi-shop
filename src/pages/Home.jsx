import React from "react";
import { categories } from "../assets/MockData";
import sliderImageOne from "../assets/images/slider-2.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { productsData } from "../assets/productsData";

const Home = () => {
  // Use local mock data for Top Products UI
  const products = productsData;

  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              Shop By categories
            </div>
            <ul className="space-y-2 bg-gray-100 p-4">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-base hover:text-red-600 cursor-pointer transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full  md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={sliderImageOne} alt="Shop" className="h-full w-full" />
            <div className=" absolute top-20 left-8">
              <p className="text-gary-600 mb-4">Raj | E-Shop</p>
              <h2 className="text-3xl font-bold">Welcome to Our Store</h2>
              <h3 className="text-xl mt-2.5 font-bold text-gray-800">
                Best Online Shopping Experience
              </h3>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>

          <div className="container mx-auto px-4 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.slice(0, 5).map((product) => (
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

                  <button className="absolute right-4 bottom-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-700">
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

export default Home;
