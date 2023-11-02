"use client"

import React from "react";
import ServiceCard from "./serviceCard";
import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const ServiceSection = () => {
  const {ref} = useSectionInView('Services', 0.5);

  return (
    <div ref={ref} id="services" className="w-full py-[70px] lg:py-[150px] text-center bg-[#f8f4f3]">
      <h1 className="text-2xl lg:text-4xl font-bold mb-5 lg:mb-8">Our Services</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[10px] md:gap-[20px] lg:gap-[30px]">
        {
            servicesData.map((item) => (
                <ServiceCard key={item.id} title={item.title} describe={item.describe} image={item.image} icon={item.icon} />
            ))
        }
      </div>
    </div>
  );
};

export default ServiceSection;
