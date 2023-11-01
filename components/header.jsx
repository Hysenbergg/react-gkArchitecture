"use client"

import React from "react";
import Image from "next/image";
import mainLogo from "@/public/logo.png";
import Link from "next/link";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="fixed left-0 top-0 p-0 m-0 w-full bg-white bg-opacity-60 border-b-[0.1px] border-zinc-400 z-[999] h-[80px] backdrop-blur-[8px] shadow-lg shadow-black/30">
      <div className="px-[32px] mx-40 flex justify-between items-center h-full">
        <Image src={mainLogo} className="h-8 w-auto" />
        <nav className="flex flex-1 justify-end gap-2 text-black ">
          {
            links.map((link) => (
              <Link 
                key={link.name}
                className="m-[10px] px-[8px] py-[15px] hover:bg-gray-400 hover:rounded-md" 
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
