import React from "react";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600 " />,
      title: "Free Shipping",
      description: "Get your Order Delivered Free",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600 " />,
      title: "24/7 Support",
      description: "We're here to help you anytime",
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-red-600 " />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="text-3xl text-red-600 " />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-3xl text-red-600 " />,
      title: "Best Discount",
      description: "Enjoy amazing discounts on all products",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-md shadow-sm hover:shadow-md transform hover:-translate-y-1 transition ease-out duration-200"
              >
                <div className="self-start mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
