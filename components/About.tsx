import React from "react";

function About() {
  return (
    <div
      className="relative h-screen max-w-7xl
      flex flex-col justify-evenly items-center
      text-center
      px-10 mx-auto
      md:text-left md:flex-row"
    >
      <h3
        className="absolute top-24
        uppercase text-2xl text-gray-500 tracking-[20px]"
      >
        About
      </h3>
    </div>
  );
}

export default About;
