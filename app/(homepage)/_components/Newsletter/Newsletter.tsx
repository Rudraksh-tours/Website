"use client"

import { NewEmailModalComponent } from "@/app/components/NewEmailModal";
import { ExistingModalComponent } from "@/app/components/ExistingEmailModal";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successStatus, setSuccessStatus] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [emailExists, setEmailExists] = useState<boolean>(false); 


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setError("Please enter an email address");
      alert("Please enter an email address");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    try {
      const response = await fetch("/addEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccessStatus(true);
        setEmail("");
        setError(""); // Reset error if success
      } else {
        const responseData = await response.json();
        if (response.status === 400 && responseData === 'Email already exists') {
          setEmailExists(true);
        } else {
          setError("Error adding email");
        }
      }
    } catch (error) {
      console.error("Error adding email:", error);
      setError("Error adding email");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const closeModal = () => {
    setSuccessStatus(false);
    setEmailExists(false);
  };


  // Ensure the modal is closed when the component mounts or unmounts
  useEffect(() => {
    return () => {
      setSuccessStatus(false);
      setEmailExists(false);
    };
  }, []);

  return (
    <div className="w-full py-16 text-black mt-14 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Stay Updated!
          </h1>
          <p>
            Sign up for our newsletter to receive exclusive travel deals,
            destination guides, and insider tips straight to your inbox..
          </p>
        </div>
        <div className="my-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleChange}
            />
            <button
              className="w-full h-12 bg-black my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] p-5"
              disabled={loading}
              type="submit"
            >
              {loading ? <div className="loader" /> : "Notify Me"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="font-semibold cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
      {successStatus && <NewEmailModalComponent onClose={closeModal} showModal={successStatus} />}
      
      {emailExists && <ExistingModalComponent onClose={closeModal} showModal={emailExists} />}
    </div>
  );
};
