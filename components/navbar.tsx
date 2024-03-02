import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-10 px-8">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className=" font-black  text-2xl">LOGO</span>
        </Link>
        <div className="md:flex hidden items-center gap-9 text-base">
          <Link href="/" className="hover:text-primary">
            <span>Services</span>
          </Link>
          <Link href="/" className="hover:text-primary">
            <span>Clients</span>
          </Link>
          <Link href="/" className="hover:text-primary">
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
