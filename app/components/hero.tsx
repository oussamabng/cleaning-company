/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import { Button } from "../../components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative md:h-screen w-full">
      <Banner position="top" />
      <Navbar />
      <div className="flex justify-center h-full lg:py-12 py-6 md:px-8 px-14">
        <div className="flex flex-col items-center gap-6">
          <span className="text-primary font-semibold text-base">
            Professional Cleaning Service
          </span>
          <span className="font-bold md:text-6xl sm:text-5xl text-3xl text-center max-w-screen-lg">
            We Are Premium Cleaning Company located in USA ready to make your
            life easier!!
          </span>
          <p className="text-sm text-center max-w-screen-md md:pt-3 pt-0">
            {`At Cleanzer Crystal Clean, we believe in building a relationship
            with every one of our customers. Our cleaning programs are tailored
            to meet your needs. We don't believe in a one size fits all
            approach. Need us to wash dishes? Do laundry? Make the beds? Not a
            problem!`}
          </p>
          <div className="flex sm:flex-row flex-col items-center gap-8 py-4">
            <Link href="tel:+33629933352">
              <Button size="lg">
                Book A Schedule
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            {/* 
            <Button variant="outline" size="lg">
              Our Best Offer <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button> */}
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
