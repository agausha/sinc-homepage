import { ArrowRight } from "lucide-react";
import CoFoundWithUsCards from "./CoFoundWithUsCards";
import Link from "next/link";

function CoFoundWithUs() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-6">
      <div className="text-center">
        <h2 className="font-medium text-5xl text-[#212121]">
          Co-found With Us
        </h2>
        <p className="font-normal text-base text-[#4E4E4E] max-w-[970px] mx-auto mt-6">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
        <CoFoundWithUsCards />
      </div>
      <div className="flex justify-center mt-14">
        <Link
          href="/"
          className="flex items-center font-semibold text-[17px] underline"
        >
          Build your dream
          <ArrowRight className="ml-1 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

export default CoFoundWithUs;
