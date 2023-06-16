"use client";

import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"), { ssr: false }); // About section needs access to client device
// (https://github.com/vercel/next.js/discussions/14469#discussioncomment-29422)
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroRef.current?.scrollIntoView();
  }, []);

  return (
    <div
      className="
      h-screen z-0
      text-white
      lg:snap-y lg:snap-mandatory
      overflow-scroll
      "
    >
      <Header />
      <section className="lg:h-1 lg:snap-center" />
      <section id="hero" className="lg:snap-center" ref={heroRef}>
        <Hero aboutRef={aboutRef} />
      </section>

      <section id="about" className="lg:snap-center" ref={aboutRef}>
        <About />
      </section>
    </div>
  );
}
