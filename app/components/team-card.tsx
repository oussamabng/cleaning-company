import { Avatar } from "@/components/ui/avatar";
import { FileBarChart } from "lucide-react";

interface TeamCardProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const TeamCard: React.FC<TeamCardProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center justify-center sm:gap-12 gap-4">
      <Avatar className="rounded text-white bg-[#EDF1FC] w-28 h-28 flex justify-center items-center">
        {icon ?? <FileBarChart className="text-primary w-8 h-8" />}
      </Avatar>
      <div className="flex flex-col gap-4">
        <span className="capitalize font-bold md:text-2xl text-xl text-[#000B41]">
          {title}
        </span>
        <span className="text-[#333333] md:text-base text-sm">{subtitle}</span>
      </div>
    </div>
  );
};

export default TeamCard;
