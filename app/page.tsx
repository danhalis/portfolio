"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div
      className="
      h-screen z-0
      bg-[#242424] text-white
      snap-y snap-mandatory
      overflow-scroll"
    >
      <Header />
      <section className="h-1 snap-center" />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
