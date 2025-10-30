import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
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
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
