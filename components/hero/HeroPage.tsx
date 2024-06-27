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
    <div className="h-[calc(100vh-80px)] overflow-hidden">
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
            <div className="h-[250px] xl:w-1/2 xl:h-full px-8  flex flex-col items-start justify-center gap-8 2xl:gap-12 text-center">
              <h1 className="text-3xl text-left w-[491px] lg:text-4xl 2xl:text-5xl font-semibold">
                {slide.title}
              </h1>
              <h2 className="text-xl text-left w-[500px] lg:text-2xl 2xl:text-4xl">
                {slide.description}
              </h2>
              <Link href={slide.url}>
                <button
                  className="text-sm text-white py-2.5 px-5 font-600 leading-[19.2px] bg-[#303030] hover:bg-[#130f0f] rounded-3xl
]"
                >
                  SINC With Us
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
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
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
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
