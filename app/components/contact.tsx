import Heading from "@/components/heading";
import TeamCard from "./team-card";
import { teamData } from "@/lib/constants";
import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <div className="w-full py-20 md:px-8 px-14 bg-[#EBF4FF] bg-opacity-25">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between items-center md:gap-6 gap-14">
          <div className="flex flex-col gap-14">
            <Heading title="How To Get Our Service" tag="Get our Service" />
            <div className="flex flex-col items-start gap-8">
              <TeamCard
                title={"Phone"}
                subtitle={"123-456-7890"}
                icon={<PhoneCallIcon className="text-primary w-8 h-8" />}
              />
              <TeamCard
                title={"Mail"}
                subtitle={"info@companyemail.com"}
                icon={<MailIcon className="text-primary w-8 h-8" />}
              />
              <TeamCard
                title={"Location"}
                subtitle={"1111 Avenue Francis Road, Laval, USA"}
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
