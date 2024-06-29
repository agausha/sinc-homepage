import Link from "next/link";
import Image from "next/image";

import MenuBar from "../menuBar/MenuBar";

function Header() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-12 xl:px-14 2xl:px-64 relative bg-[#F9F9F9]">
      {/* MOBILE MENU */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image
            src="/images/sinc-logo.png"
            alt="Sinc Logo"
            width={115}
            height={64}
            className="w-20 h-12"
          />
        </Link>
        <MenuBar />
      </div>
      {/* LARGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-6 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-10">
          <Link href="/">
            <Image
              src="/images/sinc-logo.png"
              alt="Sinc Logo"
              width={115}
              height={64}
              className="w-20 h-12"
            />
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="">About</Link>
            <Link href="">SIP</Link>
            <Link href="">Studio</Link>
            <Link href="">SEEQ</Link>
            <Link href="">Platforms</Link>
            <Link href="">Initiatives</Link>
            <Link href="">More</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-[10px]">
          <button
            className="text-sm text-white py-3 px-4 font-semibold leading-[19.2px] bg-[#20888F]  hover:bg-[#20777d] rounded-3xl
]"
          >
            SINC With Us
          </button>
          <button
            className="text-sm text-white py-3 px-4 font-semibold leading-[19.2px] bg-[#303030]  hover:bg-[#353535] rounded-3xl
]"
          >
            Apply to SIP 1.0
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
