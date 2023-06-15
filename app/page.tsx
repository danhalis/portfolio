"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LegacyRef, useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);

  return (
    <div
      className="
      h-screen z-0
      text-white
      snap-y snap-mandatory
      overflow-scroll
      "
    >
      <Header />
      <section className="h-1 snap-center" />
      <section id="hero" className="snap-start">
        <Hero aboutRef={aboutRef} />
      </section>

      <section id="about" className="snap-center" ref={aboutRef}>
        <About />
      </section>
    </div>
  );
}
