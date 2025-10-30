import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);

  const [BillingToggle, setBillingToggle] = useState(true);
  const [ShippingToggle, setShippingToggle] = useState(false);
  const [PaymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-96  md:px-16 lg:px-24">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="md:w-2/3">
            <div className="border p-2 mb-6 ">
              <div
                className="flex items-center justify-between"
                onClick={() => setBillingToggle(!BillingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Billing information
                </h3>
                {BillingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`space-x-0 ${BillingToggle ? "block" : "hidden"}`}
              >
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700">Phone</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border p-2 mb-6 ">
              <div
                className="flex items-center justify-between"
                onClick={() => setShippingToggle(!ShippingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Shipping information
                </h3>
                {ShippingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`space-x-0 ${ShippingToggle ? "block" : "hidden"}`}
              >
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border"
                    placeholder="Enter your address"
                  />
                </div>

                <div>
                  <div>
                    <label className="block text-gray-700">City</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700">Zip Code</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border"
                      placeholder="Enter your zip code"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Information */}
            <div className="border p-2 mb-6 ">
              <div
                className="flex items-center justify-between"
                onClick={() => setPaymentToggle(!PaymentToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Payment information
                </h3>
                {PaymentToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={`space-x-0 ${PaymentToggle ? "block" : "hidden"}`}
              >
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="block text-gray-700">
                    Cash on Delivery
                  </label>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label className="block text-gray-700">
                    Debit/Credit Card
                  </label>
                </div>
                {paymentMethod === "dc" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="**** **** **** ****"
                        maxLength="16"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1">CVV</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="***"
                          maxLength="3"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter name as shown on card"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {/* Product Items */}

              {cartProducts.map((item) => (
                <div className="flex items-center space-x-4">
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}

              {/* Total */}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold">Total Price:</span>
                  <span className="text-xl font-bold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
