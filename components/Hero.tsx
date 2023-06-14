import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, my name's Hieu"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center
    overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor />
      </h1>
    </div>
  );
}

export default Hero;
