"use client"

import React from "react";
import Image from "next/image";
import mainLogo from "@/public/logo.png";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="lg:fixed left-0 top-0 p-0 m-0 w-full bg-[#f8f4f3] bg-opacity-60 border-b-[0.1px] border-zinc-400 z-[999] h-[100px] lg:h-[80px]  backdrop-blur-[8px] shadow-lg shadow-black/30">
      <div className="py-3 mx-5 md:mx-20 lg:mx-40 flex flex-col lg:flex-row justify-between items-center h-full">
        <Image src={mainLogo} className="h-8 w-auto mb-4 md:mb-2 lg:mb-0" />
        <nav className="flex flex-1 justify-end gap-7 md:gap-5 lg-gap-2 text-black">
          {
            links.map((link) => (
              <Link 
                key={link.name}
                className={clsx(
                  `px-[5px] py-[6px] md:px-[8px] md:py-[8px] hover:bg-gray-400 hover:rounded-md text-[10px] md:text-[12px] lg:text-[15px]`,
                  {"bg-[#252531] text-[#f8f4f3] rounded-lg" : activeSection === link.name})} 
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;
