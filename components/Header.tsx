import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header
      className="
      sticky top-0 z-20
      bg-[#242424d8]
      lg:bg-transparent
      flex justify-between
      max-w-7xl mx-auto
      px-5 lg:py-5
    "
    >
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="flex items-center">
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://github.com/danhalis"
          />
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            url="https://www.linkedin.com/in/hieudaoleduc/"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div
          className="flex items-center
        cursor-pointer
      "
        >
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p
            className="
          uppercase
          text-sm text-gray-400
          hidden md:inline-flex
        "
          >
            Contact Me
          </p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
