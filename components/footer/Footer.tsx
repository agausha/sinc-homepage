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
           focus:outline-none rounded-3xl w-[150px] md:left-auto md:right-0 sm:w-[110px] h-[49px]"
          >
            Search
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

            {/* <div className="flex gap-4">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={16}
              height={16}
            />
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
            />
            <Image
              src="/icons/youtube.png"
              alt="Youtube"
              width={16}
              height={16}
            />
            <Image
              src="/icons/linkedin.png"
              alt="Linkedin"
              width={16}
              height={16}
            />
            <Image src="/icons/x.png" alt="X" width={16} height={16} />
          </div> */}
          </div>
          {/* CENTER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 justify-between w-full md:w-3/4">
            <div className="flex flex-col justify-between">
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
            <div className="flex flex-col justify-between">
              <h1 className="font-semibold text-lg">Initiatives</h1>
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
            <div className="flex flex-col justify-between">
              <h1 className="font-semibold text-lg">About Us</h1>
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
            <div className="flex flex-col justify-between">
              <h1 className="font-semibold text-lg">More</h1>
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
          <span className="flex border-l border-[#E9E9E9] py-2 h-full"></span>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6">
            <div className="flex flex-col justify-between">
              <h1 className="font-semibold text-lg mb-4">Locations</h1>
              <div className="flex flex-col gap-5">
                <Link href="">Jabi Plains</Link>
                <Link href="">Lagos, Nigeria</Link>
                <Link href="">Philadelphia, USA</Link>
                <div className="flex justify-between mt-7">
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
                    <p className="flex-grow py-2 px-1 text-[14px]">
                      ACCREDITED BUSINESS A+
                    </p>
                  </div>
                  <Link href="" className="mr-10 mt-7">
                    <Image
                      src="/images/chat.png"
                      alt="Chat Logo"
                      width={85}
                      height={72}
                      className="w-16 h-14"
                    />
                  </Link>
                </div>
                <span className="-mt-8">Trusted Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">
          {" "}
          &copy; {new Date().getFullYear()} SINC Partners Ltd. All rights
          reserved
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language:</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency:</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
