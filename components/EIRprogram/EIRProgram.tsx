import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function EIRProgram() {
  return (
    <div className="bg-[#F9F9F9] py-12 px-6 overflow-x-scroll scrollbar-hide">
      <div className="text-center">
        <h2 className="font-medium text-5xl text-[#212121]">How it Works</h2>
        <p className="font-normal text-base text-[#4E4E4E] max-w-[954px] mx-auto mt-6">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
        <div className="flex justify-center mt-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
            <div className="p-4 rounded-lg bg-white w-[380px] h-[392px]">
              <h3 className="text-xl text-[#212121] mb-5 font-medium text-start">
                Application and Selection
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-start py-3">
                Begin your journey by completing our straightforward application
                form. Share insights into your entrepreneurial background,
                expertise, and your vision for supporting the success of our
                portfolio companies. Our dedicated selection committee,
                comprised of key stakeholders at SINC Partners, will carefully
                review your application.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white w-[380px] h-[392px]">
              <h3 className="text-xl text-[#212121] font-medium mb-5 text-start">
                Alignment Meeting and Proposal Submission
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-start py-3">
                If your application stands out, we&apos;ll invite you to an
                alignment meeting. This is an opportunity to discuss the goals
                of our EIR program and explore how your expertise aligns with
                the needs of our portfolio companies. Following the alignment
                meeting, submit a formal proposal outlining your intended
                contributions and how you envision adding significant value to
                our portfolio companies.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white w-[380px] h-[392px]">
              <h3 className="text-xl text-[#212121] font-medium mb-5 text-start">
                Negotiation and Agreement
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-start py-3">
                Upon successful alignment and proposal review, we&apos;ll engage
                in discussions to finalize the terms of your EIR role. This
                includes the duration, expectations, and any compensation or
                equity arrangements. Once terms are agreed upon, we&apos;ll
                draft a formal agreement outlining the specifics of your EIR
                engagement, including reporting structures, responsibilities,
                and the support/resources provided by SINC Partners.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white w-[380px] h-[392px]">
              <h3 className="text-xl text-[#212121] font-medium mb-5 text-start">
                Onboarding and Integration
              </h3>
              <p className="text-[#4E4E4E] font-normal text-base text-start py-3">
                UCongratulations! As an accepted EIR, you&apos;ll undergo an
                onboarding process to familiarize yourself with the SINC
                Partners ecosystem, our portfolio companies, and key team
                members. Facilitated introductions will ensure a seamless
                integration between you and relevant portfolio companies,
                setting clear expectations for collaboration.
              </p>
            </div>
          </div>
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
    </div>
  );
}

export default EIRProgram;
