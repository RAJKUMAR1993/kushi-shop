import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* e-Shop Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">e-Shop</h2>
            <p className="text-gray-300 mb-6">
              Your one-stop shop for all your needs. Shop with us and experience
              the best online shopping experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-300 hover:text-white transition"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>

            {/* Subscribe Form */}
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-red-500 flex-grow"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-r hover:bg-red-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} e-Shop. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
