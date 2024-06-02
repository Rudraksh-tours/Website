"use client";

import { ImageList, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GuideReasonCard } from "../guide-services/_components/GuideReasonCard";
import {
  DollarSign,
  AirVent,
  Wifi,
  Tv2,
  CookingPot,
  Bike,
  SquareParking,
  Fence,
  Bed,
} from "lucide-react";
import Link from "next/link";
import CustomButton from "../components/Button";
import Image from "next/image";


const Homestays = () => {
  const isTabletLaptopOrMonitor = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 767px)"); // For small screens
  const itemData = [
    {
      img: "/homestays.jpg",
      title: "Bed",
    },
    {
      img: "homestay_2.jpg",
      title: "Books",
    },
    {
      img: "homestay_7.jpg",
      title: "Sink",
    },
    {
      img: "homestay_23.jpg",
      title: "Kitchen",
    },
    {
      img: "homestay_1.jpg",
      title: "Blinds",
    },
    {
      img: "homestay_19.jpg",
      title: "Chairs",
    },
    {
      img: "homestay_22.jpg",
      title: "Laptop",
    },
    {
      img: "homestay_17.jpg",
      title: "Doors",
    },
    {
      img: "homestay_13.jpg",
      title: "Coffee",
    },
    {
      img: "homestay_16.jpg",
      title: "Storage",
    },
    {
      img: "homestay_24.jpg",
      title: "Candle",
    },
    {
      img: "homestay_4.jpg",
      title: "Coffee table",
    },
  ];
  return (
    <Box className="flex flex-col items-center">
      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold mb-8">Rudraksh Homestays</h1>
      </div>
      <ImageList
        variant={isTabletLaptopOrMonitor ? "masonry" : "woven"}
        sx={
          isSmallScreen
            ? { width: "full", height: "auto", padding: 3 }
            : { width: 800, height: 550 }
        }
        cols={isTabletLaptopOrMonitor ? 3 : 1}
        gap={1}
      >
        {itemData.map((image, index) => (
          <ImageListItem key={index}>
            <Image width={800} height={500} src={image.img} alt={image.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      {/* Reasons for choosing a Guide */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold text-center">What we offer ?</h2>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {/* First Card */}
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Economical Budget"
            customComponent={<DollarSign />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="A/C Rooms"
            customComponent={<AirVent />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Wifi"
            customComponent={<Wifi />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="T.V"
            customComponent={<Tv2 />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Kitchen Facility"
            customComponent={<CookingPot />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Scooter on Rent"
            customComponent={<Bike />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Parking Facility"
            customComponent={<SquareParking />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Balcony for good ventilation"
            customComponent={<Fence />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Comfort Beds along with Mattress"
            customComponent={<Bed />}
          />

          {/* Repeat this for other cards */}
        </div>
      </div>
      <div className="mt-16 flex justify-center"> {/* Center the button */}
          <Link href="contact">
          <CustomButton title="Contact us for Booking" />
          </Link>
          
        </div>
    </Box>
  );
};

export default Homestays;
