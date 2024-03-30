"use client";

import Link from "next/link";
import { NAV_LINKS } from "../constants";
import Image from "next/image";
import CustomButton from "./Button";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Loader from 'react-loaders'

export const Navbar = () => {
  const pathname = usePathname();
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = 0.37;

      if (scrollPosition > pageHeight * scrollThreshold) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <>
    <nav
      className={`flexBetween  p-0 max-container padding-container  z-30  ${
        isSticky ? "sticky top-0 bg-yellow-100 transition-all" : ""
      }`}
    >
      <Link href="/">
        <div className="py-2 px-0">
          <Image src="/logo.png" alt="logo" width={150} height={50} />
        </div>
      </Link>

      <ul
        className={`hidden h-full gap-12 lg:flex ${isSticky ? "fade-in" : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <div onClick={() => setMenu(false)}>
              <Link
                href={link.path}
                className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold  ${
                  pathname === link.path
                    ? "border-b-4 rounded-sm border-black"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        
          <CustomButton title="Customize Your Tour" path="/contact"  />
        
      </div>

      <FiMenu
        onClick={() => setMenu(true)}
        className="text-3xl cursor-pointer lg:hidden"
      />

      {/* sidebar smaller screens menu */}

      <div
        className={`
        fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full z-50 transition-all
        ${isSideMenuOpen ? "translate-x-0" : ""}
      `}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8  w-56 flex items-center justify-center  ">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />
          <ul className="list-none">
            {NAV_LINKS.map((link) => (
              <li className="mb-10" key={link.key}>
                <Link
                  href={link.path}
                  className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold  ${
                    pathname === link.path
                      ? "border-b-2   rounded-sm border-black"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 justify-center mt-4">
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
        </section>
      </div>
    </nav>
               
    </>
    
  );
};
