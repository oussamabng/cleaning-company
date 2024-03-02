import { MoveRight } from "lucide-react";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/constants";
import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div className="w-full md:py-40 py-32 md:px-8 px-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-14">
          <div className="flex md:flex-row flex-col md:justify-between md:items-end items-start gap-6">
            <Heading
              title="What Our Services"
              desc="While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
              tag="best services"
            />
            <Button size="lg">
              See more
              <MoveRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 w-full items-center">
            {servicesData.map(({ title, subtitle }, index) => (
              <ServiceCard key={index} title={title} subtitle={subtitle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
