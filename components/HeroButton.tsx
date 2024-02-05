import Link from "next/link";
import React from "react";

interface Props {
  sectionRef: React.RefObject<HTMLElement>;
  href: string;
  children: React.ReactNode;
}
function HeroButton({ sectionRef, href, children }: Props) {
  return (
    <button
      className="hero-btn"
      onClick={() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        window.location.href = href;
      }}
    >
      {children}
    </button>
  );
}

export default HeroButton;
