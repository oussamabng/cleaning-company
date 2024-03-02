import {
  FacebookIcon,
  Instagram,
  MailIcon,
  MapPinIcon,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-8 text-base text-[#231F20]">
      <div className="flex md:flex-row flex-col md:justify-between md:items-start items-center md:gap-0 gap-12">
        <div className="flex md:items-start items-center flex-col gap-5">
          <Link href="/">
            <span className=" font-black  text-2xl">LOGO</span>
          </Link>
          <span className="max-w-xs md:text-left text-center">
            We Are Premium Cleaning Company in USA ready to make your life
            easier!!
          </span>
          <div className="flex items-center gap-2">
            <div className="flex justify-center bg-primary text-white items-center rounded-full w-9 h-9">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="flex justify-center bg-primary text-white items-center rounded-full w-9 h-9">
              <Twitter className="w-4 h-4" />
            </div>
            <div className="flex justify-center bg-primary text-white items-center rounded-full w-9 h-9">
              <FacebookIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex md:items-start items-center flex-col gap-5">
          <span className="text-primary font-semibold text-xl">Navigation</span>
          <div className="flex md:items-start items-center flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Services</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>
        <div className="flex md:items-start items-center flex-col gap-5">
          <span className="text-primary font-semibold text-xl">Contact</span>
          <div className="flex flex-col md:items-start items-center gap-2">
            <Link
              href="/"
              className="flex items-center md:text-left text-center"
            >
              <PhoneCall className="mr-2 w-4 h-4 " /> 123-456-7890
            </Link>
            <Link
              href="/"
              className="flex items-center md:text-left text-center"
            >
              <MailIcon className="mr-2 w-4 h-4" /> info@companyemail.com
            </Link>
            <Link
              href="/"
              className="flex items-center md:text-left text-center"
            >
              <MapPinIcon className="mr-2 w-4 h-4" /> 1111 Avenue Francis Road,{" "}
              <br className="md:block hidden" />
              Laval, USA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
