import CustomButton from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <>
      <section id = "about-us"  className="overflow-hidden  pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg- dark:bg-dark p-7">
        <div className="container mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-center">
            About Us
          </h1>
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      width={200}
                      height={300}
                      src="/Elephant.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={200}
                      height={300}
                      src="/Mehrangarh.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      width={200}
                      height={300}
                      src="/Taj-mahal.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Rudraksh Tours & Travels
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  We are one of the best International Indian Tourist guide with
                  one motive to provide you best accomodation services, giving
                  you cab facility keeping all hygine, covidm protocols etc.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  We provide Homestays as per need (Charges may Vary) and also
                  provide Cab facility. Pick and drop facility available from
                  Delhi Airport.
                </p>
                <div className="my-11 flex flex-wrap gap-5">
                  <div className="flex items-center gap-2">
                    {Array(5)
                      .fill(1)
                      .map((_, index) => (
                        <Image
                          src="/star.svg"
                          key={index}
                          alt="star"
                          width={24}
                          height={24}
                        />
                      ))}
                  </div>

                  <span className="regular-16 lg:regular-20 ml-1">
                    Excellent Reviews
                  </span>
                </div>
                <Link href="/contact">
                  <CustomButton
                    path="/contact"
                    title="Contact Us"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
