"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Loader from "react-loaders";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Loader active = {loading} type="pacman" />
          <div className="loader"></div>
        </div>
      )}
      <div className="relative mb-36">
        {/* Full-width image with text overlay */}
        <div className="relative h-96 sm:h-[400px] xl:h-[500px] 2xl:h-[600px] z-0">
          <Image
            src="/Amer-fort.jpg"
            alt="Contact header"
            width={1920}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              CONTACT
            </h1>
          </div>
        </div>

        {/* Contact form and quick links */}
        <div className="max-w-screen-xl mx-auto mt-16 p-4 lg:flex lg:justify-between hover:cursor-pointer">
          {/* Quick Links */}
          <div className="lg:w-1/3 shadow-2xl hover: cursor-pointer hover:shadow-lg transition duration-300 border rounded-lg p-8 w-full bg-custom-20 mb-6 flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Mail us at :- </h3>
                <p className="text-lg">RudrakshTravelsandTours@gmail.com</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Give us a call :-</h3>
                <p className="text-lg">+91 9928595142</p>
              </div>

              <div className="flex flex-col gap-4 justify-center ">
                <h3 className="text-lg font-semibold">Leave a Messasge :-</h3>
                <div className="flex  gap-3">
                  <Link href="">
                    <FaInstagram
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      size={24}
                    />
                  </Link>
                  <Link href="">
                    <FaFacebook
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      size={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="border shadow-2xl rounded-lg p-8 mb-8 lg:mb-0 hover:shadow-lg transition duration-300 w-full  lg:w-[60%] bg-custom-20 ">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="flex flex-col items-center">
              {/* Form fields go here */}
              <input
                type="text"
                placeholder="Name"
                className="mb-6 p-3 border rounded-lg text-lg w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-6 p-3 border rounded-lg text-lg w-full"
              />
              <input
                type="email"
                placeholder="Subject"
                className="mb-6 p-3 border rounded-lg text-lg w-full"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="mb-6 p-3 border rounded-lg text-lg w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
