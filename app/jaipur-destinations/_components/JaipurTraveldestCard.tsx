import Image from "next/image";


interface JaipurTravelDestCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export const JaipurTravelDestCard = ({
  title,
  description,
  imgSrc,
}: JaipurTravelDestCardProps) => {
  return (
    <div className="relative flex flex-col border rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl hover:cursor-pointer transform transition-transform hover:scale-105 mt-10 sm:w-80 p-4 sm:p-6 mx-auto md:flex-col">
      <div className="relative mt-2 h-40 border overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 flex flex-col items-center justify-center">
        <div>
          <Image src={imgSrc} width={400} height={60} alt="Service Icon" />
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <div>
          <p className="mb-4 sm:max-w-md">{description}</p>
        </div>
      </div>
    </div>
  );
};
