import React from "react";

interface Props {
  sectionRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
}
function HeroButton({ sectionRef, children }: Props) {
  return (
    <button
      className="hero-btn"
      onClick={() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {children}
    </button>
  );
}

export default HeroButton;
