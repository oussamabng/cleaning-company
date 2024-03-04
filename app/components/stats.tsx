import { Button } from "@/components/ui/button";
import { statsData } from "@/lib/constants";

const Stats = () => {
  return (
    <div className="w-full">
      <div className="relative bg-primary py-20 px-4 text-white w-full flex justify-center items-center">
        <h2 className="font-bold md:text-5xl text-4xl text-center max-w-2xl leading-snug">
          We Make Sanitizing Services Simple And Easy For You
        </h2>
        <div className="absolute bottom-0">
          <Button
            size="lg"
            variant="secondary"
            className="translate-y-1/2 cursor-default"
          >
            More Than Just Cleaning
          </Button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-8">
        <div className="flex flex-col items-center gap-8">
          <span className="text-base font-light text-center max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            sollicitudin sem. Ut tempus ligula eget vestibulum dapibus. Sed ac
            pulvinar massa. Class aptent{" "}
          </span>
          <div className="flex flex-wrap justify-center items-center gap-7">
            {statsData.map(({ title, count }, index) => (
              <div
                key={index}
                className="md:w-60 w-52 md:h-40 h-36 rounded-[20px] bg-primary text-white flex justify-center items-center"
              >
                <div className="flex flex-col items-center gap-2">
                  {
                    <span className="font-semibold md:text-5xl text-4xl">
                      {count}+
                    </span>
                  }
                  {
                    <span className="font-medium md:text-xl text-lg">
                      {title}
                    </span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
