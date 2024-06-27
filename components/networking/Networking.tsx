import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Networking() {
  return (
    <section className="py-12 px-4 bg-[#F9F9F9]">
      <div className="w-[808px] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="text-center w-[768px]">
          <h2 className="sm:text-3xl w-[495px] text-4xl font-500 text-[#212121] font-semibold py-6">
            Network of builders helping startup scale
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="p-4 rounded-lg bg-white">
              <h3 className="text-xl font-semibold text-start">
                Work with Service Incubators to expedite your time-to-market
              </h3>
              <p className="text-[#4E4E4E] font-400 text-xs text-start py-3">
                Collaborate with our meticulously chosen service partners, each
                with a vested interest, ensuring a shared commitment to success
                in the game of venture building.
              </p>
              <span className="font-semibold text-xs font-600 text-[#4E4E4E]">
                For 7.5% equity, you get a product manager, product designer,
                frontend engineer, software engineer and growth marketer to
                build the MVP of your app or web application and validate it.
              </span>

              <div className="flex justify-start">
                <Link
                  href="/"
                  className="flex items-center justify-center font-semibold text-[17px] underline mt-2"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white">
              <h3 className="text-xl font-semibold text-start">
                Access funding after your mvp is validated
              </h3>
              <p className="text-[#4E4E4E] font-400 text-xs text-start py-3">
                Startups that have built and validated their product can take
                advantage of the financial resources of the SINC Investors
                Network, elevating their potential for success in the venture
                capital landscape.
              </p>
              <span className="font-semibold text-xs font-600 text-[#4E4E4E]">
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                months.
              </span>

              <div className="flex justify-start">
                <Link
                  href="/"
                  className="flex items-center justify-center font-semibold text-[17px] underline mt-5"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Networking;
