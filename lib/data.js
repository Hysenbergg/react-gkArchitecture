import React from "react";
import { BsHouseLockFill } from "react-icons/bs";
import { MdApartment, MdOutlineDesignServices } from "react-icons/md";
import ServicePhoto1 from "@/public/service_photo_1.jpg";
import ServicePhoto2 from "@/public/service_photo_2.jpg";
import ServicePhoto3 from "@/public/service_photo_3.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const servicesData = [
  {
    id: 0,
    title: "Service 1",
    describe: "Service 1 Açıklaması yer almaktadır.",
    image: ServicePhoto1,
    icon: React.createElement(BsHouseLockFill),
  },
  {
    id: 1,
    title: "Service 2",
    describe: "Service 2 Açıklaması yer almaktadır.",
    image: ServicePhoto2,
    icon: React.createElement(MdOutlineDesignServices),
  },
  {
    id: 2,
    title: "Service 3",
    describe: "Service 3 Açıklaması yer almaktadır.",
    image: ServicePhoto3,
    icon: React.createElement(MdApartment),
  },
];
