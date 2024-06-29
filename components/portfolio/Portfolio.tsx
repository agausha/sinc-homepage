import { portfolios } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Portfolio() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-6">
      <div className="text-center mt-14">
        <h2 className="font-medium text-5xl text-[#212121]">
          Our Studio Portfolio
        </h2>
        <p className="font-normal text-base text-[#4E4E4E] max-w-[970px] mx-auto mt-6">
          Our 2024 Service Incubator Portfolio Companies
        </p>
        <div className="flex justify-center mt-14">
          <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-1 gap-6">
            {portfolios.map((item, itemIndex) => {
              return (
                <Image
                  src={item.image}
                  alt="Portfolio Logos"
                  width={120}
                  height={40}
                  key={itemIndex}
                  className={`flex justify-between
                    bg-white w-[120px] h-[60px] rounded-md py-3 px-4 gap-4`}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <Link
            href="/"
            className="flex items-center font-semibold text-[17px] underline"
          >
            View All Companies
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
