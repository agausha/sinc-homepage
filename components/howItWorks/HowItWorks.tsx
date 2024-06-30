import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HowItWorksCards from "./HowItWorksCards";

function HowItWorks() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-6 overflow-x-scroll scrollbar-hide">
      <div className="text-center">
        <h2 className="font-medium text-5xl text-[#212121]">How it Works</h2>
        <p className="font-normal text-base text-[#4E4E4E] max-w-[954px] mx-auto mt-6">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
        <HowItWorksCards />
      </div>
      <div className="flex justify-center mt-14">
        <Link
          href="/"
          className="flex items-center font-semibold text-[17px] underline"
        >
          Support the Future
          <ArrowRight className="ml-1 h-5 w-5" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-16 mt-14">
        <button>
          <Image
            src="/images/arrow-left.png"
            alt="Arrow Left"
            width={67}
            height={66}
            className="w-12 h-12"
          />
        </button>
        <button>
          <Image
            src="/images/arrow-right.png"
            alt="Arrow right"
            width={67}
            height={66}
            className="w-12 h-12"
          />
        </button>
      </div>
    </div>
  );
}

export default HowItWorks;
