"use client"

import React from "react";
import Slider from "@/components/slider";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Slider />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
