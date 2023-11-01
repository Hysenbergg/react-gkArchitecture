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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        className="h-screen"
      >
        {sliderElements.map((item) => (
          <SwiperSlide className="bg-black relative " key={item.id}>
            <div className="flex flex-col">
              <Image src={item.image} className="opacity-50" />
              <div className="absolute w-[600px] h-[350px] text-white top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-7xl mb-5 leading-snug">{item.title}</h1>
                <p className="text-base leading-8">{item.describe}</p>
                <button className="uppercase bg-amber-600 px-[35px] py-[12px] mt-5">discover block</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
