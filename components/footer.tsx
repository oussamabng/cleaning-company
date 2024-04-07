import {
  FacebookIcon,
  Instagram,
  MailIcon,
  MapPinIcon,
  PhoneCall,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-8 text-base text-[#231F20]">
      <div className="flex md:flex-row flex-col md:justify-between md:items-start items-center md:gap-0 gap-12">
        <div className="flex md:items-start items-center flex-col gap-5">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="object-cover"
            />
          </Link>
          <span className="max-w-xs md:text-left text-center">
            Nous sommes une entreprise de nettoyage haut de gamme à
            Aix-en-Provence prête à vous faciliter la vie !!
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
            <Link href="/">Acceuil</Link>
            <Link href="#service">Services</Link>
            <Link href="#contact">Contactez-nous</Link>
          </div>
        </div>
        <div className="flex md:items-start items-center flex-col gap-5">
          <span className="text-primary font-semibold text-xl">Contact</span>
          <div className="flex flex-col md:items-start items-center gap-2">
            <Link
              href="tel:+33629933352"
              className="flex items-center md:text-left text-center"
            >
              <PhoneCall className="mr-2 w-4 h-4 " /> +33 629 933 352 -- +33 767
              840 889
            </Link>
            <Link
              href="mailto:siriusproprete@gmail.com"
              className="flex items-center md:text-left text-center"
            >
              <MailIcon className="mr-2 w-4 h-4" /> siriusproprete@gmail.com
            </Link>
            <span className="flex items-center md:text-left text-center">
              <MapPinIcon className="mr-2 w-4 h-4" /> 4 Allée Georges peretti
              13100,
              <br className="md:block hidden" />
              Aix-en-Provence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
