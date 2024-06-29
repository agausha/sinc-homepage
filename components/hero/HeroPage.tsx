"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    img: "/images/hero.png",
    url: "/",
    bg: "bg-white",
  },
  {
    id: 2,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    img: "/images/hero.png",
    url: "/",
    bg: "bg-white",
  },
  {
    id: 3,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    img: "/images/hero.png",
    url: "/",
    bg: "bg-white",
  },
];

function HeroPage() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] sm:h-[26rem] lg:h-[23rem] xl:h-[28rem] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-8 md:gap-12 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="px-8 flex flex-col items-center xl:items-start justify-center gap-3 md:gap-6 text-center xl:text-left mx-auto xl:w-1/2">
              <h1 className="text-3xl mt-3 md:text-4xl xl:text-5xl font-semibold">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl">
                {slide.description}
              </p>
              <Link href={slide.url}>
                <button className="rounded-3xl bg-[#303030] text-white py-3.5 px-8 mt-4 text-sm hover:bg-[#130F0F] transition-all ease-in-out">
                  SINC With Us
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="hidden xl:block xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 flex gap-4 sm:top-[28rem] lg:top-[22rem] xl:top-[30rem]">
        {slides.map((slide, index) => (
          <div
            className={`w-[6px] h-[6px] rounded-full bg-[#D9D9D9] ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroPage;
