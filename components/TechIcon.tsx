import Tooltip from "@mui/material/Tooltip";
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
      <Tooltip title={alt} arrow placement="top">
        <Image src={icon} alt={alt} width="25" height="25" style={style} />
      </Tooltip>
    </Link>
  );
}

export default TechIcon;
