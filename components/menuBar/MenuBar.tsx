"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
function MenuBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        {!open ? <AlignLeft className="w-6 h-6" /> : <X className="w-6 h-6" />}
      </span>
      {open && (
        <div className="absolute bg-[#F9F9F9] left-0 top-20 sm:top-16 w-full h-[calc(100vh-80px)] sm:h-[30rem] flex flex-col items-center justify-center gap-4 text-[18px] z-20">
          <Link href="">About</Link>
          <Link href="">SIP</Link>
          <Link href="">Studio</Link>
          <Link href="">SEEQ</Link>
          <Link href="">Platforms</Link>
          <Link href="">Initiatives</Link>
          <Link href="">More</Link>
          <button className="text-[10px] text-white py-2 px-3 font-semibold leading-[19.2px] bg-[#20888F] rounded-3xl">
            SINC With Us
          </button>
          <button className="text-[10px] text-white py-2 px-3 font-semibold leading-[19.2px] bg-[#303030] rounded-3xl">
            Apply to SIP 1.0
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuBar;
