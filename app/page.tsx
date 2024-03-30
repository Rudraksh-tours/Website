import Image from "next/image";
import { Navbar } from "./components/Navbar";

import { Introduction } from "./(homepage)/_components/introduction/introduction";
import { AboutUs } from "./(homepage)/_components/AboutUs/about-us";
import { Services } from "./(homepage)/_components/services/services";
import { Newsletter } from "./(homepage)/_components/Newsletter/Newsletter";


export default function Home() {
  return (
    <>
      <Introduction />
      <AboutUs />
      <Services />
      <Newsletter />
    </>
  );
}
