"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    img: "/images/hero.png",
    url: "/",
    bg: "bg-white",
  },
  {
    id: 2,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    img: "/images/hero.png",
    url: "/",
    bg: "bg-white",
  },
  {
    id: 3,
    title: "SINC Partners is a service incubation company",
    description:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    img: "/images/hero.png",
    url: "/",
    bg: "bg-white",
  },
];
function HeroPage() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] sm:h-80 overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-[250px] xl:w-1/2 xl:h-full px-8  flex flex-col items-start justify-center gap-3 2xl:gap-12 text-center mx-auto">
              <h1 className="text-3xl text-left w-[491px] sm:text-2xl lg:text-4xl 2xl:text-5xl sm:mt-8 font-semibold">
                {slide.title}
              </h1>
              <p className="text-xl text-left w-[500px] sm:text-base lg:text-2xl 2xl:text-4xl">
                {slide.description}
              </p>
              <Link href={slide.url}>
                <button className="rounded-3xl bg-[#303030] text-white py-3.5 px-8 mt-4 text-sm hover:bg-[#130F0F] transition-all ease-in-out">
                  SINC With Us
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="hidden xl:block h-1/2 xl:w-1/2 xl:h-full relative">
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
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 flex gap-4 sm:top-[22rem]">
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
