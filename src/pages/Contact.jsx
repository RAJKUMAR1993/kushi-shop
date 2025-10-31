import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gray-800 h-48 md:h-64">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
          <div className="text-gray-200 flex gap-2">
            <span>Home</span>
            <span>•</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">ADDRESS</h3>
                <div className="flex items-start gap-3 text-gray-600">
                  <FaMapMarkerAlt className="mt-1 text-red-500" />
                  <div>
                    <p>Brace Infotech Pvt LTD,</p>
                    <p>8th Floor, Quickstart, Shalom Sky City,</p>
                    <p>Gachibowli Circle, Telecom Nagar, Gachibowli,</p>
                    <p>Hyderabad, Telangana 500081</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">CALL US</h3>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaPhone className="text-red-500" />
                  <p>040-48514808</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">MAIL & FAX</h3>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaEnvelope className="text-red-500" />
                  <div>
                    <p>Email: hr@braceinfotech.com</p>
                    <p>Fax: +1 0123-4789-8333</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <p className="text-gray-600 mb-6">
              Simply complete the enquiry form or send us an email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
