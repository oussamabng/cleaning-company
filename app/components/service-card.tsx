import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  img: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, img }) => {
  return (
    <div className=" mx-auto border border-[#F2F2F2] p-8 rounded flex flex-1">
      <div className="flex flex-col md:gap-6 gap-4">
        <Avatar className="w-60 h-60 rounded text-white bg-primary flex justify-center items-center">
          <AvatarImage src={img} className="object-cover" />
        </Avatar>
        <span className="md:text-xl text-lg font-bold">{title}</span>
        <p className="text-base text-[#646464]">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
