"use client";

import BackgroundCircles from "@/components/BackgroundCircles";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";

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

      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
