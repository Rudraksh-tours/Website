"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import CustomButton from "@/app/components/Button";

export const Introduction = () => {
  const [text, setText] = useState("Explore Rajasthan like never before");

  const handleSlideChange = (index: number) => {
    // Example: Change text based on slide index
    switch (index) {
      case 0:
        setText("Explore Rajasthan like never before");
        break;
      case 1:
        setText("Experience the majestic beauty of Amer Fort");
        break;
      case 2:
        setText("Explore the vibrant markets of Jaipur");
        break;
      case 3:
        setText("Enjoy the serene lakes of Udaipur");
        break;
      case 4:
        setText("Immerse yourself in the culture of Jodhpur");
        break;
      default:
        setText("Explore Rajasthan like never before");
    }
  };

  return (
    <div className="relative ">
      {/* Text overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          {text}
        </h1>
    
      </div>

      {/* Carousel */}
      <div className="w-full h-96 sm:h-[700px] xl:h-[900px] 2xl:h-[1080px] overflow-hidden">
        <Carousel
          onSlideChange={(index) => handleSlideChange(index)}
          slide={false}
          pauseOnHover
          slideInterval={3000}
          indicators = {false}
        >
          <Image 
          src="/killa.jpg" 
          width={1920} 
          height={1080} 
          alt="..." />
          <Image
            src="/Amer-fort.jpg"
            width={1920}
            alt="Amer_Fort"
            height={384}
          />
          <Image
            src="/camel.jpg"
            width={1920}
            alt="..."
            height={384}
          />
          <Image
            src="/udaipur-lakes.jpg"
            width={1920}
            alt="..."
            height={384}
          />
          <Image
            src="/hava-mahal.jpg"
            width={1920}
            alt="..."
            height={384}
          />
        </Carousel>
      </div>
    </div>
  );
};
