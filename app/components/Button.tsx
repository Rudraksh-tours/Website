"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "react-loaders";

interface CustomButtonProps {
  title: string;
  path?: string;
  type?: "submit" | "reset" | "button";
}

export const CustomButton = ({ title, path, type }: CustomButtonProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push(path || '#');
    }, 1600);
  };

  return (
    <button
      className="w-full md:min-w-[150px] h-12 bg-black my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] p-5"
      onClick={handleClick}
      disabled={loading}
      type={type}
    >
      {loading ? (<div className="loader" />) :  (title) }
    </button>
  );
};

export default CustomButton;



