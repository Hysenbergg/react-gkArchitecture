import Image from "next/image";
import React from "react";
//import footerLogo from "@/public/footer-logo.png";
import borderFooterLogo from "@/public/gkm-border-footer-logo.png";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
//bg-[#252531]
//bg-[#f8f4f3]
const Footer = () => {
  return (
    <footer className="bg-[#252531] text-white py-6 px-[50px]">
      <div className="flex justify-between items-center container mx-auto">
        {/* Sol Tarafta Logo */}
        <div className="w-1/2 flex justify-center">
          <Image src={borderFooterLogo} className="w-2/3" />
        </div>
        {/* Sağ Tarafta Sosyal Medya ve Bilgiler */}
        <div className="w-1/2 flex flex-col justify-center items-center py-2 ">
          <div className="flex items-center py-2 gap-5 text-white">
            <a
              href="#"
              className=" bg-[#252531] p-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-black"
            >
              <span>{React.createElement(BiLogoFacebook)}</span>
            </a>
            <a
              href="#"
              className=" bg-[#252531] p-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-black"
            >
              <span>{React.createElement(BsInstagram)}</span>
            </a>
            <a
              href="#"
              className=" bg-[#252531] p-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-black"
            >
              <span>{React.createElement(BiLogoTwitter)}</span>
            </a>
          </div>
          <div className="text-center w-[300px] text-white">
            <p className="my-1">gazanferkoc@gmail.com</p>
            <p>Orhaniye, İsmet Çatak Cd. Özman İşhanı D:12/5, 48000 Menteşe/Muğla</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
