import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroBackground from "./HeroBackground";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, my name's Hieu"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="
      h-screen
      flex flex-col
      relative
      items-center justify-center
      overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        className="absolute"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
      >
        <div
          className="flex flex-col
          items-center justify-center
          space-y-8"
        >
          <Image
            className="rounded-full object-cover shadow-[#333333] shadow-xl"
            src="https://raw.githubusercontent.com/danhalis/portfolio/master/public/profile-photo.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
          />
          <h2
            className="uppercase text-sm text-center text-gray-500
            pb-2 tracking-[14px] leading-7"
          >
            Software Developer
          </h2>
          <h1 className="text-center text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor />
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
