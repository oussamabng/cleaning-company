import { Button } from "@/components/ui/button";
import Link from "next/link";

const Action = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 px-8">
      <div className="rounded-2xl bg-primary text-white flex justify-center items-center py-14">
        <div className="flex flex-col items-center gap-5">
          <span className="md:text-4xl text-3xl font-extrabold text-center">
            Meilleure entreprise <br />
            de services de nettoyage
          </span>
          <span className="md:text-base text-sm text-center md:max-w-xl max-w-md">
            
          </span>
          <Link href="tel:+33629933352">
            <Button
              className="uppercase font-bold mt-4"
              size="lg"
              variant="secondary"
            >
              RÉSERVER Rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Action;
