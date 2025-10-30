import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const shipping = cartProducts.length > 0 ? 5.0 : 0.0;
  const grandTotal = +(totalPrice + shipping).toFixed(2);

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-4 inline-block text-red-600 hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items table */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="w-full table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">Product</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Subtotal</th>
                    <th className="px-6 py-3"> </th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-6 py-4 flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded">
                          <img
                            src={item.images}
                            alt={item.title}
                            className="max-h-16 object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-sm text-gray-500">
                            SKU: {item.id}
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        ${item.price.toFixed(2)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className="inline-flex items-center border rounded">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="px-3 py-1 text-gray-600 hover:text-gray-800"
                            aria-label={`Decrease quantity of ${item.title}`}
                          >
                            <FaMinus />
                          </button>
                          <div className="px-4 py-1">{item.quantity}</div>
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="px-3 py-1 text-gray-600 hover:text-gray-800"
                            aria-label={`Increase quantity of ${item.title}`}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        ${item.totalPrice.toFixed(2)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-600 hover:text-red-800"
                          aria-label={`Remove ${item.title}`}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleClear}
                className="text-red-600 hover:underline"
              >
                Clear Cart
              </button>
              <div>
                <Link to="/shop" className="bg-gray-100 px-4 py-2 rounded mr-2">
                  Continue Shopping
                </Link>
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-3 mt-3">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold">
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-6 bg-red-600 text-white py-2 rounded">
              Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
