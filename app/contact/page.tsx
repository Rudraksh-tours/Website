"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Loader from "react-loaders";
import { ContactForm } from "../components/ContactForm";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Loader active={loading} type="pacman" />
          <div className="loader"></div>
        </div>
      )}
      <div className="relative mb-36">
        {/* Full-width image with text overlay */}
        <div className="relative h-96 sm:h-[400px] xl:h-[500px] 2xl:h-[300px] z-0">
          <Image
            src="/contact-us-page-img.jpg"
            alt="Contact header"
            width={1920}
            height={300}
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
          <div className="lg:w-1/3 shadow-2xl hover:cursor-pointer hover:shadow-lg transition duration-300 border rounded-lg p-8 w-full bg-custom-20 mb-6 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-6 text-center text-black">
                Quick Links
              </h2>
              <div className="mb-6 text-center">
                <h3 className="text-lg font-semibold text-black">
                  Mail us at:
                </h3>
                <p className="text-lg text-black">
                  RudrakshTravelsandTours@gmail.com
                </p>
              </div>
              <div className="mb-6 text-center">
                <h3 className="text-lg font-semibold text-black">
                  Give us a call:
                </h3>
                <p className="text-lg text-black">+91 9928595142</p>
              </div>
              <div className="mb-6 text-center">
                <h3 className="text-lg font-semibold text-black">
                  Leave a Message:
                </h3>
                <div className="flex justify-center gap-4">
                  <Link href="https://www.instagram.com/rudraksh_tours_/">
                    <FaInstagram
                      className="text-gray-500 hover:text-black cursor-pointer mt-4"
                      size={24}
                    />
                  </Link>
                  <Link href= "https://www.facebook.com/profile.php?id=61558154574683">
                    <FaFacebook
                      className="text-gray-500 hover:text-black cursor-pointer mt-4"
                      size={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
