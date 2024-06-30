import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-14 2xl:px-64 bg-[#212121] text-white text-sm mt-24">
      {/* TOP */}
      <div className="w-full md:w-1/2 lg:w-[553px] h-[249px] flex flex-col gap-6">
        <h1 className="font-medium text-6xl">Newsletter</h1>
        <p className="font-normal text-base h-[84px]">
          Get the latest about SINC Partners, our startup Incubator program,
          Portfolio company offerings - straight into your inbox.
        </p>
        <div className="flex relative mb-6">
          <input
            type="text"
            id="email"
            className="bg-transparent border border-[#676767] text-[#BABABA] focus:bg-transparent  text-base rounded-[25px] outline-none w-full md:w-[460px] h-[50px] p-3"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 inline-flex items-center justify-center py-2.5 px-3 ms-2 text-base font-medium text-[#212121] bg-white
           focus:outline-none rounded-3xl w-[150px] lg:left-[340px] md:left-auto md:right-0 sm:w-[110px] h-[49px]"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex w-full border-t border-b border-[#E9E9E9] py-2 mt-3">
        <div className="flex flex-col md:flex-row justify-between gap-14 mt-4">
          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/images/sinc-footer-logo.png"
                alt="Sinc Logo"
                width={115}
                height={64}
                className="w-20 h-12"
              />
            </Link>
            <p className="leading-7 w-[220px] h-[216px] sm:w-auto sm:h-auto">
              SINC Partners is a service incubation company connecting experts
              in product development and growth marketing willing to offer their
              services to amazing startups in exchange for minute equity
              (usually 0.5% to 2%)
            </p>
          </div>
          {/* CENTER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-3 w-full md:w-3/4">
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg mb-4">Platforms</h1>
              <div className="flex flex-col gap-5">
                <Link href="">Kofoundme</Link>
                <Link href="">InResidency</Link>
                <Link href="">Service Market</Link>
                <Link href="">Founders School</Link>
                <Link href="">Metty</Link>
                <Link href="">Grantty</Link>
                <Link href="">Boldtell</Link>
                <Link href="">Chekwa</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg mb-4">Initiatives</h1>
              <div className="flex flex-col gap-5">
                <Link href="">Jabi Plains</Link>
                <Link href="">Local Pricing Initiative</Link>
                <Link href="">Scholarship Program</Link>
                <Link href="">SSMN Pricing</Link>
                <Link href="">University STEM</Link>
                <Link href="">University InResidency</Link>
                <Link href="">1M Nigeria Products</Link>
                <Link href="">Founders Festival</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg mb-4">About Us</h1>
              <div className="flex flex-col gap-5">
                <Link href="">Who We Are</Link>
                <Link href="">Our People</Link>
                <Link href="">Concept Innovations</Link>
                <Link href="">Our Process</Link>
                <Link href="">Investors Network</Link>
                <Link href="">CSR & Events</Link>
                <Link href="">Career</Link>
                <Link href="">Contact</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg mb-4">More</h1>
              <div className="flex flex-col gap-5">
                <Link href="">Services</Link>
                <Link href="">Equity Jobs</Link>
                <Link href="">EIR Program</Link>
                <Link href="">Offers</Link>
                <Link href="">Innovation News</Link>
                <Link href="">FAQ</Link>
                <Link href="">Blog & Resources</Link>
                <Link href="">Press</Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <span className="flex border-l sm:border-t border-[#E9E9E9] py-2 sm:py-0 h-full"></span>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6">
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg mb-4 sm:-mt-12 lg:mt-0 xl:mt-0 md:mt-0">
                Locations
              </h1>
              <div className="flex flex-col gap-5">
                <Link href="">Jabi Plains</Link>
                <Link href="">Lagos, Nigeria</Link>
                <Link href="">Philadelphia, USA</Link>
                <div className="flex justify-between mt-16">
                  <div className="border border-gray-400 w-44 h-16 flex gap-2 items-center">
                    <span className="border-r border-gray-400 h-16 py-3 px-4">
                      <Image
                        src="/images/business.png"
                        alt="Business Logo"
                        width={23}
                        height={25}
                        className="w-8 h-8 object-contain"
                      />
                    </span>
                    <p className="flex-grow py-2 px-1 text-xs">
                      ACCREDITED BUSINESS A+
                    </p>
                  </div>
                  <Link href="" className="mr-10 mt-7">
                    <Image
                      src="/images/chat.png"
                      alt="Chat Logo"
                      width={85}
                      height={72}
                    />
                  </Link>
                </div>
                <span className="-mt-11">Trusted Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-7">
        <div className="font-medium text-base sm:-mt-4">
          <p className="font-light text-sm w-full sm:w-auto sm:text-center h-[38px]">
            Guaranteed 2x on your service or cash investment, usually been the
            first to invest.{" "}
            <span className="font-semibold">
              Get in early and SINC your guaranty!
            </span>
          </p>
        </div>
        <div className="flex gap-8 md:flex-col">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/gasus.png"
              alt="Gasus"
              width={120}
              height={38}
            />
            <p className="font-light text-xs ml-2 sm:text-center w-full sm:w-auto h-[38px]">
              We are a business built on the foundation of Christian values and
              belief
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
        <div className="font-medium sm:text-center text-base">
          {" "}
          &copy; {new Date().getFullYear()} SINC Partners Ltd. All rights
          reserved
        </div>
        <div className="flex flex-col">
          <div className="flex font-medium text-base">
            <Link href="" className="mr-4">
              Privacy Policy
            </Link>
            <Link href="" className="mr-4 font-medium">
              Terms of Service
            </Link>
            <Link href="" className="font-medium">
              Security
            </Link>
          </div>
          <div className="sm:hidden lg:inline-flex flex items-center justify-center gap-1">
            <p className="font-semibold text-center text-base text-[#C9C9C9]">
              Web In Nigeria
            </p>
            <span>
              <Image src="/images/flag.png" alt="Flag" width={17} height={16} />
            </span>
          </div>
        </div>
        <div className="flex gap-8 md:flex-row">
          <div className="">
            <div className="flex items-center justify-center gap-4">
              <Link href="/">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={22}
                  height={21}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/youtube.png"
                  alt="Youtube"
                  width={20}
                  height={14}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/linkedin.png"
                  alt="Linkedin"
                  width={20}
                  height={21}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={21}
                  height={21}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/flickr.png"
                  alt="Flickr"
                  width={20}
                  height={11}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/messenger.png"
                  alt="Messenger"
                  width={21}
                  height={21}
                />
              </Link>
            </div>
            <div className="lg:hidden flex items-center justify-center gap-1 mt-1">
              <p className="font-semibold text-center text-base text-[#C9C9C9]">
                Web In Nigeria
              </p>
              <span>
                <Image
                  src="/images/flag.png"
                  alt="Flag"
                  width={17}
                  height={16}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
