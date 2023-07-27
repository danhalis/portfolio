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

export const DEFAULT_TECH_ICON_SIZE = 25;

function TechIcon({ icon, alt, url, style }: Props) {
  return (
    <Link href={url} target="_blank" rel="noreferrer">
      <Tooltip title={alt} arrow placement="top">
        <Image src={icon} alt={alt} width={DEFAULT_TECH_ICON_SIZE} height={DEFAULT_TECH_ICON_SIZE} style={style} />
      </Tooltip>
    </Link>
  );
}

export default TechIcon;
