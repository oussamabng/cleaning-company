import Heading from "@/components/heading";
import { servicesData } from "@/lib/constants";
import ServiceCard from "./service-card";

const Services = () => {
  return (
    <div id="service" className="w-full md:py-40 py-32 md:px-8 px-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-14">
          <div className="flex md:flex-row flex-col md:justify-between md:items-end items-start gap-6">
            <Heading
              title="What Our Services"
              desc="While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
              tag="best services"
            />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 w-full items-center">
            {servicesData.map(({ title, subtitle, img }, index) => (
              <ServiceCard
                key={index}
                title={title}
                subtitle={subtitle}
                img={img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
