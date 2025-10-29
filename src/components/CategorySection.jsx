import React from "react";
import MenCategory from "../assets/images/men.webp";
import WomenCategory from "../assets/images/women.jpg";
import KidsCategory from "../assets/images/kids.jpg";

const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: MenCategory,
    },

    {
      title: "Women",
      imageUrl: WomenCategory,
    },
    {
      title: "Kids",
      imageUrl: KidsCategory,
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p>View All</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySection;
