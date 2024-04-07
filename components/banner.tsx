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
            Appelez pour une estimation gratuite! Nous sommes toujours
            disponibles :{" "}
            <span className="font-bold text-[#FEF5E7]">
              +33 629 933 352 -- +33 767 840 889
            </span>
          </span>
        ) : (
          <span className="md:text-base text-sm">
            Copyright © 2024 | Tous droits réservés
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
