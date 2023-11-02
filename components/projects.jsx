"use client";

import React from "react";
import projectsImage1 from "@/public/projects_1.jpg";
import projectsImage2 from "@/public/projects_2.jpg";
import projectsImage3 from "@/public/projects_3.jpg";
import projectsImage5 from "@/public/projects_5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

const projects = [
  {
    id: 0,
    title: "Projects 1",
    describe: "Inspiring new space.",
    project_image: projectsImage1,
  },
  {
    id: 1,
    title: "Projects 2",
    describe: "Inspiring new space.",
    project_image: projectsImage2,
  },
  {
    id: 2,
    title: "Projects 3",
    describe: "Inspiring new space.",
    project_image: projectsImage3,
  },
  {
    id: 3,
    title: "Projects 4",
    describe: "Inspiring new space.",
    project_image: projectsImage2,
  },
  {
    id: 4,
    title: "Projects 5",
    describe: "Inspiring new space.",
    project_image: projectsImage5,
  },
];

const Projects = () => {
  const {ref} = useSectionInView('Projects', 0.5);

  return (
    <div ref={ref} id="projects" className="bg-[#252531] py-[70px] lg:py-[150px] text-center">
      <h1 className="text-2xl lg:text-4xl font-bold mb-10 text-white">
        Projeler
      </h1>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation]}
        className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px]"
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index } className="relative h-full">
            <div className="flex flex-col h-full">
              <Image src={item.project_image} className="bg-cover h-full " />
              <div className="absolute w-full h-12 lg:h-24 text-white bottom-0 right-0 left-0 text-center bg-black opacity-70 flex flex-col justify-center">
                <h6 className="text-[12px] lg:text-[24px] opacity-100">{item.title}</h6>
                <h4 className="text-[9px] lg:text-[18px] opacity-100">{item.describe}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Projects;
