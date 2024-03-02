import Heading from "@/components/heading";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import TeamCard from "./team-card";
import { teamData } from "@/lib/constants";

const Team = () => {
  const imageUrl = "/images/test.jpeg";
  return (
    <div className="w-full md:py-40 py-32 md:px-8 px-14 bg-[#EBF4FF] bg-opacity-25">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-6 gap-12">
          <div className="flex flex-col gap-14">
            <Heading title="How To Get Our Service" tag="Get our Service" />
            <div className="flex flex-col gap-8">
              {teamData.map(({ title, subtitle }, index) => (
                <TeamCard key={index} title={title} subtitle={subtitle} />
              ))}
            </div>
          </div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">Get it now</p>
            <p className="font-normal text-sm">Lorem ipsum dolor sit.</p>
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
};

export default Team;
