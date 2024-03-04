/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import { Button } from "../../components/ui/button";
import { heroData } from "@/lib/constants";

const Hero = () => {
  return (
    <div className="relative md:h-screen w-full">
      <Banner position="top" />
      <Navbar />
      <div className="flex justify-center h-full lg:py-12 py-6 md:px-8 px-14">
        <div className="flex flex-col items-center gap-6">
          <span className="text-primary font-semibold text-base">
            {heroData.title}
          </span>
          <span className="font-bold md:text-6xl sm:text-5xl text-3xl text-center max-w-screen-lg">
            {heroData.subtitle}
          </span>
          <p className="text-sm text-center max-w-screen-md md:pt-3 pt-0">
            {heroData.desc}
          </p>
          <div className="flex sm:flex-row flex-col items-center gap-8 py-4">
            <Link href="tel:+33629933352">
              <Button size="lg">
                {heroData.action}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="/svg/shape.svg"
        className="absolute right-0 bottom-0 object-contain w-auto h-[70vh] md:block hidden"
        alt="shape"
      />
      <img
        src="/svg/shape.svg"
        className="absolute scale-x-[-1] left-0 bottom-0 object-contain w-auto h-[70vh] md:block hidden"
        alt="shape"
      />
    </div>
  );
};

export default Hero;
