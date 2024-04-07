import Heading from "@/components/heading";
import TeamCard from "./team-card";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full py-20 md:px-8 px-14 bg-[#EBF4FF] bg-opacity-25 scroll-mt-12"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between items-center md:gap-6 gap-14">
          <div className="flex flex-col gap-14">
            <Heading title="Comment obtenir notre service" tag="Obtenez notre service" />
            <div className="flex flex-col items-start gap-8">
              <TeamCard
                title={"Téléphone"}
                subtitle={"+33 629 933 352 -- +33 767 840 889"}
                icon={<PhoneCallIcon className="text-primary w-8 h-8" />}
              />
              <TeamCard
                title={"Mail"}
                subtitle={"siriusproprete@gmail.com"}
                icon={<MailIcon className="text-primary w-8 h-8" />}
              />
              <TeamCard
                title={"Emplacement"}
                subtitle={"4 Allée Georges peretti 13100, Aix-en-Provence"}
                icon={<MapPinIcon className="text-primary w-8 h-8" />}
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
