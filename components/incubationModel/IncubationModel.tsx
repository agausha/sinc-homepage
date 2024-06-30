import { ArrowRight } from "lucide-react";
import Link from "next/link";
import IncubationModelCards from "./IncubationModelCards";

function IncubationModel() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-6">
      <div className="text-center">
        <h2 className="font-medium text-5xl text-[#212121]">
          Our Service Incubation Model
        </h2>
        <p className="font-normal text-base text-[#4E4E4E] max-w-[970px] mx-auto mt-6">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>
      <div className="mt-14 space-y-14">
        <div>
          <div className="text-center md:text-start mx-auto max-w-[970px]">
            <h3 className="text-3xl text-[#212121] mb-3  font-medium">
              Hypothesis
            </h3>
            <p className="text-[#4E4E4E] font-normal text-base">
              Just a few reasons we know its time for this model
              within the ecosystem
            </p>
            <IncubationModelCards />
          </div>
        </div>
        <div>
          <div className="text-start mx-auto max-w-[970px]">
            <h3 className="text-3xl text-[#212121] mb-5 font-medium text-center md:text-start">
              Case Study
            </h3>
            <p className="text-[#4E4E4E] font-normal text-base">
              See what Service Incubators get, the maths behind Service Equity
              (SEEQ) and what the value of your share equity can be over time
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start font-normal mt-8">
              <span className="w-full sm:w-auto py-4 px-8 rounded-3xl bg-white text-sm text-center">
                Service Incubator Equity
              </span>
              <span className="w-full sm:w-auto py-4 px-8 rounded-3xl bg-white text-sm text-center">
                SEEQ Maths Equation
              </span>
              <span className="w-full sm:w-auto py-4 px-8 rounded-3xl bg-white text-sm text-center">
                Value of my Equity Over Time
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <Link
              href="/"
              className="flex items-center font-semibold text-[17px] underline"
            >
              Become A Service Incubator
              <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncubationModel;
