import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

interface BannerProps {
  position: "top" | "bottom";
}

const Banner: React.FC<BannerProps> = ({ position = "top" }) => {
  const isTop = position === "top";
  return (
    <div
      className={cn(
        "bg-primary text-white",
        isTop ? "md:py-6 py-4" : "md:py-4 py-2"
      )}
    >
      <div
        className={cn(
          "w-full max-w-screen-xl mx-auto flex items-center px-8",
          isTop ? "justify-between" : "justify-center"
        )}
      >
        {isTop ? (
          <span className="md:text-base text-sm">
            Call for free estimate! We are always available :{" "}
            <span className="font-bold text-[#FEF5E7]">123-456-7890</span>
          </span>
        ) : (
          <span className="md:text-base text-sm">
            Copyright © 2024 | All Rights Reserved
          </span>
        )}
        {isTop && (
          <div className="flex items-center md:gap-7 gap-4">
            <Link href="/">
              <Instagram size={24} />
            </Link>
            <Link href="/">
              <Twitter size={24} />
            </Link>
            <Link href="/">
              <Facebook size={24} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
