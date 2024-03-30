"use client";
import Image from "next/image";
import Link from "next/link";
import { CabComponent } from "./_components/CabComponent";


const ContactUs = () => {
  return (
    <div className="relative mb-15">
      {/* Full-width image with text overlay */}
      <div className="relative h-96 sm:h-[400px] xl:h-[500px] 2xl:h-[600px] z-0">
        <Image
          src="/cab-stock-img.jpeg"
          alt="Contact header"
          width={1920}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Effortless Travel with Our Cab Services
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-16 p-10 md:flex-col">
        <h2 className="text-3xl font-semibold mb-6 flex justify-center items-center">
          Book Taxis for every need
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <CabComponent title="Innova crysta" description="7 seater. Spacious interior. Advanced safety. Comfortable ride" imgSrc="/cab-stock-img.jpeg" />

          <CabComponent title="Deluxe Tempo Traveller" description="12 seater. Luxury seating. Ample space. Entertainment system." imgSrc="/tempo.jpg" />

          <CabComponent title="Buses" description="35-60 seats. Privacy curtains. Comfortable seating. Spacious interior." imgSrc="/bus.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
