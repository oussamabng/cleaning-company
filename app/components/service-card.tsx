import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import { ArrowRight, HomeIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle }) => {
  return (
    <div className=" mx-auto border border-[#F2F2F2] p-8 rounded flex flex-1">
      <div className="flex flex-col md:gap-6 gap-4">
        <Avatar className="rounded text-white bg-primary w-16 h-16 flex justify-center items-center">
          <HomeIcon />
        </Avatar>
        <span className="md:text-xl text-lg font-bold">{title}</span>
        <p className="text-base text-[#646464]">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
