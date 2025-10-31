import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { mockData } from "../assets/MockData";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <>
      <div>
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">New Products</h2>

          <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
              {products.products.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
