import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full py-2 px-8">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={140}
            height={140}
            className="object-cover"
          />
        </Link>
        <div className="md:flex hidden items-center gap-9 text-base">
          <Link href="#service" className="hover:text-primary">
            <span>Services</span>
          </Link>
          <Link href="#contact" className="hover:text-primary">
            <span>Contact</span>
          </Link>
        </div>
        <Button size="lg" className="md:block hidden">
          Request An Estimate
        </Button>
        <Button className="md:hidden block">Request</Button>
      </div>
    </nav>
  );
};

export default Navbar;
