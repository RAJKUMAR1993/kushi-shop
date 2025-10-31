import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const FilterData = () => {
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );

  return (
    <>
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4">
        {filteredProducts.length === 0 ? (
          <p className="font-bold text-center text-green-600">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterData;
