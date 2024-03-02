import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import { ArrowRight, HomeIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle }) => {
  return (
    <div className=" mx-auto border border-[#F2F2F2] p-8 rounded md:w-72 w-64">
      <div className="flex flex-col md:gap-6 gap-4">
        <Avatar className="rounded text-white bg-primary w-16 h-16 flex justify-center items-center">
          <HomeIcon />
        </Avatar>
        <span className="md:text-xl text-lg font-bold">{title}</span>
        <p className="text-base text-[#646464]">{subtitle}</p>
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="text-primary md:text-base text-sm">
              Learn More.
            </span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
