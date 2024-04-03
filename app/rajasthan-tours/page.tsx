import { RajTravelDestCard } from "./_components/RajTravelDestCard";
import { DESTINATIONS_RAJASTHAN } from "../constants";
import CustomButton from "../components/Button";

const page = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Famous places to visit in Rajasthan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DESTINATIONS_RAJASTHAN.map((destination, index) => (
          <RajTravelDestCard
            key={index}
            title={destination.title}
            imgSrc={destination.imgSrc}
            description={destination.description}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-lg">
          Discover more enchanting destinations in Rajasthan!
        </p>
        <p className="text-gray-600 text-lg">
          Explore the vibrant culture, majestic forts, and stunning landscapes!
        </p>
        <div className=" mt-4 p-6 pt-0 flex justify-center">
        {/* Center the button */}
        <CustomButton path="/contact" title="Contact us for booking" />
      </div>
      </div>
    </div>
  );
};

export default page;
