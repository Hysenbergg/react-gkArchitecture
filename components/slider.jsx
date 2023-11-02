"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

import denemepage from "@/public/denemepage.jpg";
import denemepage2 from "@/public/denemepage2.jpg";
import denemepage3 from "@/public/denemepage3.jpg";

const sliderElements = [
  {
    id: 0,
    title: "Innovative Architecture",
    describe:
      "Architek have been developing a transversal approach combining architecture, urbanism and landscape.",
    image: denemepage,
  },
  {
    id: 1,
    title: "Classic and Modern",
    describe:
      "Architek have been developing a transversal approach combining architecture, urbanism and landscape.",
    image: denemepage3,
  },
  {
    id: 2,
    title: "Elegant Unique Design",
    describe:
      "Architek have been developing a transversal approach combining architecture, urbanism and landscape.",
    image: denemepage2,
  },
];

export default function Slider() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <main ref={ref} id="home">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        className="h-[250px] sm:h-[400px] md:h-[600px] lg:h-screen"
      >
        {sliderElements.map((item) => (
          <SwiperSlide className="bg-black relative " key={item.id}>
            <div className="flex flex-col">
              <Image src={item.image} className="opacity-50 object-cover" />
              <div className="absolute w-[250px] sm:w-[400px] md:w-[500px] lg:w-[500px] h-[100px] sm:h-[250px] md:h-[350px] lg:h-[400px] text-white top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-lg md:text-4xl lg:text-7xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 leading-none sm:leading-tight md:leading-snug">{item.title}</h1>
                <p className="text-xs md:text-sm lg:text-base leading-4 sm:leading-6 md:leading-8">{item.describe}</p>
                <button className="uppercase bg-amber-600 px-[12px] sm:px-[18px] md:px-[25px] lg:px-[35px] py-[5px] sm:py-[8px] md:py-[12px] text-sm md:text-base mt-5">discover block</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
