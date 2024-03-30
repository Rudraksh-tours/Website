import { ServiceCard} from "@/app/(homepage)/_components/services/_components/ServiceComponent";

export const Services = () => {
  return (
    <section id = "services" className="max-container py-16 p-4 sm:p-6 mb-10">
      <h1 className="text-5xl lg:text-6xl font-bold mb-10 text-center">
        Services
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">

    {/* All rajasthan Tours and Travels Services */}

          <ServiceCard linkPath="/contact"  imgSrc="/cab.svg" title="Provide all Rajasthan Tour & Travel Services" description="Comprehensive Tour & Travel services. From majestic forts to vibrant festivals. Shopping. Visit of the City" />

    {/* Cab services */}


          <ServiceCard linkPath="/cab-services" imgSrc="/cab.svg" title="Cab services" description="Reliable & comfortable Cab Services. Pick and drop facilty from Delhi Airport.
          Affordable Prices. Multiple Options (Buses & Deluxe Tempo)" />

{/* Homestays */}

          <ServiceCard linkPath="" imgSrc="/cab.svg" title="Homestays" description="Cozy & comfortable accommodations. Warm hospitality. Authentic cultural immersion. Unique local experiences." />

{/* Guide Services */}

          <ServiceCard linkPath="/guide-services" imgSrc="/cab.svg" title="Guide Services" description={`Memorable experiences with skilled guides. French & English. Expert insights into Rajasthan's heritage. Customized tours for every preference.`} />




        </div>
      </div>
    </section>
  );
};
