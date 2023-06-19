import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  icon: string;
  alt: string;
  url: string;
  style?: React.CSSProperties;
}

function TechIcon({ icon, alt, url, style }: Props) {
  return (
    <Link href={url} target="_blank" rel="noreferrer">
      <Image
        src={icon}
        alt={alt}
        width="25"
        height="25"
        style={style}
      />
    </Link>
  );
}

export default TechIcon;
