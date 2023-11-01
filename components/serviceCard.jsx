"use client";

import React, { useState } from "react";
import Image from "next/image";

const ServiceCard = ({ title, describe, image, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div
    className={`group flex flex-col bg-white m-3 
      relative overflow-hidden h-[400px] w-[350px]
      ${isHovered ? "bg-transparent " : ""}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="flex flex-1 flex-col h-full items-start justify-center px-[60px] py-[40px] relative z-[1]">
      <span className="mb-[30px] text-[#b19777] text-[60px]">{icon}</span>
      <h1
        className={`mb-5 text-[18px] font-semibold ${
          isHovered ? "text-white" : ""
        }`}
      >
        {title}
      </h1>
      <p className={`text-black text-start ${isHovered ? "text-white" : ""}`}>
        {describe}
      </p>
      <button
        className={`mt-[30px] text-black text-lg ${
          isHovered ? "text-yellow-600" : ""
        }`}
      >
        Read More
      </button>
    </div>

    <Image
      src={image}
      className={`flex-[2_2_0%] h-full bg-cover absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity 
      duration-300 z-0 ${
        isHovered ? "group-hover:opacity-70 brightness-50" : ""
      }`}
    />
  </div>
  );
};

export default ServiceCard;

// Ayrı image
/*

const ServiceCard = ({ title, describe, image, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`group flex flex-col bg-white m-3 
        relative overflow-hidden h-[400px] w-[350px]
        ${isHovered ? "bg-transparent " : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-1 flex-col h-full items-start justify-center px-[60px] py-[40px] relative z-[1]">
        <span className="mb-[30px] text-[#b19777] text-[60px]">{icon}</span>
        <h1
          className={`mb-5 text-[18px] font-semibold ${
            isHovered ? "text-white" : ""
          }`}
        >
          {title}
        </h1>
        <p className={`text-black text-start ${isHovered ? "text-white" : ""}`}>
          {describe}
        </p>
        <button
          className={`mt-[30px] text-black text-lg ${
            isHovered ? "text-yellow-600" : ""
          }`}
        >
          Read More
        </button>
      </div>

      <Image
        src={image}
        className={`flex-[2_2_0%] h-full bg-cover absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity 
        duration-300 z-0 ${
          isHovered ? "group-hover:opacity-70 brightness-50" : ""
        }`}
      />
    </div>
  );
};

export default ServiceCard;

*/

// Background Image
/*

const ServiceCard = ({ title, describe, image, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`flex flex-col bg-white m-3 
        relative overflow-hidden h-[400px] w-[350px] 
        `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex flex-1 flex-col h-full items-start justify-center px-[60px] py-[40px] ${
          isHovered
            ? "bg-[url('../public/service_photo_2.jpg')] bg-no-repeat bg-center bg-cover brightness-75"
            : ""
        }`}
      >
        <span className="mb-[30px] text-[#b19777] text-[60px]">{icon}</span>
        <h1
          className={`mb-5 text-[18px] font-semibold ${
            isHovered ? "text-white" : ""
          }`}
        >
          {title}
        </h1>
        <p className={`text-black text-start ${isHovered ? "text-white" : ""}`}>
          {describe}
        </p>
        <button
          className={`mt-[30px] text-black text-lg ${
            isHovered ? "text-yellow-600" : ""
          }`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
*/

/*
 <div
      className={`flex flex-col bg-white w-[350px] h-[400px] 
      bg-no-repeat bg-center bg-cover brightness-50 ${isHovered ? "bg-[url('../public/service_photo_2.jpg')]" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-white">
        <h1>Deneme</h1>
        <p>Deneme mesajı burada yer alacak.</p>
      </div>
    </div>
*/
