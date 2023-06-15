import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroBackground from "./HeroBackground";

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
      space-y-8 items-center justify-center
      overflow-hidden"
    >
      <HeroBackground />
      <h1 className="absolute">
        <span>{text}</span>
        <Cursor />
      </h1>
    </div>
  );
}

export default Hero;
