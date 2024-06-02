import Image from "next/image";
import { GuideReasonCard } from "./_components/GuideReasonCard";
import Link from "next/link";
import { DollarSign } from "lucide-react";
import { SkipForward } from "lucide-react";
import { Users } from "lucide-react";
import { MapPin } from "lucide-react";
import { Clock } from "lucide-react";
import { Plane } from "lucide-react";
import { GuidePricingCard } from "./_components/GuidePricingCard";
import CustomButton from "../components/Button";

const GuideServices = () => {
  return (
    <div className="relative ">
      {/* Full-width image with text overlay */}
      <div className="relative h-96 sm:h-[400px] xl:h-[500px] 2xl:h-[500px] z-0">
        <Image
          src="/guide-large.jpg"
          alt="Contact header"
          width={1920}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Local guides, global knowledge
          </h1>
        </div>
      </div>

      {/* Reasons for choosing a Guide */}
      <div className="p-10">
        <h2 className="text-2xl font-semibold flex items-center justify-center">
          Why hire a tourist guide?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 pl-16">
          {/* First Card */}
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Save money"
            description="Avoid tourist traps and save on transportation"
            customComponent={<DollarSign />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Skip the lines"
            description="Get into top attractions with fast track entry"
            customComponent={<SkipForward />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Personalized itinerary"
            description="Customize your trip based on your interests"
            customComponent={<Users />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Local insights"
            description="Discover hidden gems and local favorite spots"
            customComponent={<MapPin />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Efficient sightseeing"
            description="Maximize your time and see more in less time"
            customComponent={<Clock />}
          />
          <GuideReasonCard
            imgUrl="/cab.svg"
            title="Convenient and stress-free travel"
            description="Your guide will take care of the details, so you can relax and enjoy your trip"
            customComponent={<Plane />}
          />

          {/* Repeat this for other cards */}
        </div>
      </div>


      <div className="max-w-screen-xl mx-auto mt-1 p-10  lg:flex-col lg:justify-center items-center hover:cursor-pointer">
        <div className="mt-16 flex justify-center"> {/* Center the button */}
          <Link href="contact">
          <CustomButton title="Book your guide" />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default GuideServices;
