import CustomButton from "@/app/components/Button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  linkPath: string;
}

export const ServiceCard = ({
  title,
  description,
  imgSrc,
  linkPath,
}: ServiceCardProps) => {
  const descriptionLines = description.split(". ");

  return (
    
      <div className="relative flex w-80 flex-col  border rounded-xl border-black bg-white bg-clip-border text-gray-700 shadow-2xl hover:cursor-pointer transform transition-transform hover:scale-105 mt-10 p-4 sm:p-6  ">
        <div className="relative mt-2 h-40 border overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 flex flex-col items-center justify-center">
        <div>
          <Image src={imgSrc} width={400} height={60} alt="Service Icon" />
        </div>
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
          <ul className="pl-1">
            {/* Render each line of the description as a list item */}
            {descriptionLines.map((line, index) => (
              <li key={index} className="mb-2 flex items-center"> {/* Make the list item a flex container */}
              <div className="mr-2" style={{ fontSize: "1.25rem" }}> {/* Wrap the icon inside a div and set font size */}
                <CircleCheck />
              </div>
              <span>{line}</span> {/* Use a span for the line of text */}
            </li>
            ))}
          </ul>
        </div>
        <div className="p-6 pt-0">
          <CustomButton path={linkPath} title="Know More" />
        </div>
      </div>
    
  );
};










