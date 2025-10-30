import React from "react";
import { BiUser } from "react-icons/bi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
            <Link to="/cart" className="relative">
              {/* circular cart button */}
              <div
                aria-label="Cart"
                className="w-10 h-10 rounded-full bg-gray-100 text-green-600 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <FaShoppingCart className="text-lg" />
              </div>

              {/* badge */}
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cart.length}
                </span>
              )}
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/login"
                className="px-3 py-1.5 border border-gray-200 rounded text-gray-700 hover:bg-gray-50 transition"
                aria-label="Login"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700 transition"
                aria-label="Register"
              >
                Register
              </Link>
            </div>

            <button
              className="block md:hidden p-2 bg-gray-100 rounded-full"
              aria-label="User menu"
            >
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
