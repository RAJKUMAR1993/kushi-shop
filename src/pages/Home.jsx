import React, { useEffect } from "react";
import { categories, mockData } from "../assets/MockData";
import sliderImageOne from "../assets/images/slider-2.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log(products.products, "::12");
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

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

          <div className="container mx-auto px-4 md:px-16 lg:px-24 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
              {products.products.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        <Shop />
      </div>
    </>
  );
};

export default Home;
