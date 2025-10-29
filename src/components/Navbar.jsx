import React from "react";
import { BiUser } from "react-icons/bi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartProducts);
  console.log(cart.length, ":::9");

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link to="/">E-Shop</Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form>
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-md py-2  w-full"
              />
              <FaSearch className="absolute top-3 right-3 text-red-500" />
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <FaShoppingCart className="text-lg" />
              {cart.length > 0 && (
                <span className="absolute  top-11  bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
            <button className="hidden md:block">Login|Register</button>
            <button className="block md: hidden">
              <BiUser />
            </button>
          </div>
        </div>
        {/* header */}
        <div className="flex justify-center items-center space-x-6  py-2 font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
