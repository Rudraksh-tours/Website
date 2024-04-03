"use client"

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FooterColumn } from "./FooterColumn";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  
  // Dynamically change year every new year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  return (
    <footer id="footer" className="flexCenter mb-24 mt-20 border-t-2">
      <div className="padding-container max-container flex w-full flex-col gap-14 mt-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.png" alt="logo" width={200} height={50}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns,index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link,index) => (
                    <Link className="hover:underline" href={`${link.destination}`} key={index}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/contact"
                    key={link.label}
                    className="hover:cursor-default flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* SOCIALS section with Instagram and Facebook Icons */}
            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="logo" width={24} height={24} />
                  </Link>
                ))}
                <div className="flex gap-4 justify-center mt-4">
                  <Link href="https://www.instagram.com/rudraksh_tours_/">
                    <FaInstagram
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      size={24}
                    />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61558154574683">
                    <FaFacebook
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                      size={24}
                    />
                  </Link>
                </div>
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">{currentYear} Rudraksh Tours & Travels  | All rights reserved</p>
      </div>
    </footer>
  )
}
