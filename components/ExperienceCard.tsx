import React from "react";
import { Row, Item } from "@mui-treasury/components/flex";
import Avatar from "@material-ui/core/Avatar";
import { Tech } from "@/interfaces/Tech";
import TechIcon from "./TechIcon";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Color from "color";
import { cn } from "@/lib/utils";

import { TruncatedList } from "react-truncate-list";
import "react-truncate-list/dist/styles.css";

interface Props {
  className?: string;
  companyLogo: string;
  companyName: string;
  companyThemeColor: string;
  title?: string;
  techStack?: Tech[];
  startDate: string;
  endDate?: string;
  duties?: string[];
  companyLogoClassName?: string;
}

const useStyles = makeStyles(({ palette }) => ({
  color: ({ color }: { color: string }) => ({
    "&:before": {
      backgroundColor: Color(color).darken(0.3).desaturate(0.2).toString(),
    },
  }),
  root: {
    position: "relative",
    // minWidth: 320,
    width: "100%",
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      zIndex: 0,
      bottom: 0,
    },
    "&:hover": {
      "& $logo": {
        transform: "scale(1.1)",
        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
      },
    },
  },
  cover: {
    borderRadius: "1rem",
  },
  content: ({ color }: { color: string }) => ({
    position: "relative",
    zIndex: 1,
    marginBottom: "auto",
    width: "100%",
    // boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .lighten(0.12)
        .fade(0.5)})`,
    },
  }),
  title: {
    fontFamily: "Fjalla One",
    fontSize: "1.25rem",
    color: "#fff",
    margin: 0,
  },
  logo: {
    transition: "0.3s",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
    borderRadius: "1rem",
  },
  team: {
    fontFamily: "Sen",
    fontSize: "0.75rem",
    color: palette.text.hint,
  },
  date: {
    fontFamily: "Sen",
    color: "#fff",
    backgroundColor: palette.text.hint,
    opacity: 0.72,
    fontSize: "0.75rem",
    padding: "0 0.5rem",
    borderRadius: 12,
  },
}));

function ExperienceCard({
  className,
  companyLogo,
  companyName,
  companyThemeColor,
  title,
  techStack = [],
  startDate,
  endDate = "Now",
  duties = [],
  companyLogoClassName,
}: Props) {
  const styles = useStyles({ color: companyThemeColor });
  const gapBetweenTechIcons = 12;
  const techListPadding = 8;

  const [techListExpanded, setTechListExpanded] = React.useState(false);
  const expandTechList = () => setTechListExpanded(true);
  const collapseTechList = () => setTechListExpanded(false);

  return (
    <Box className={cn(styles.root, styles.color, "pt-10", className)}>
      <Box className={styles.content} p={2}>
        <Box className="space-y-2" position={"relative"} zIndex={1}>
          <Row
            className={`flex ${title ? "items-start" : "items-center"}`}
            p={0}
            gap={2}
          >
            <Item>
              <Avatar
                className={cn(styles.logo, "w-28 h-28", companyLogoClassName)}
                src={companyLogo}
                alt={companyName}
              />
            </Item>
            <Item>
              {title && (
                <h4 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light mb-1">
                  {title}
                </h4>
              )}

              <p className="md:text-lg mb-2">
                @ <span className="font-bold">{companyName}</span>
              </p>
              <p className="text-gray-300 uppercase">
                {startDate} - {endDate}
              </p>
            </Item>
          </Row>
          <Row padding={`${techListPadding}px`} alignItems={"center"}>
            <TruncatedList
              className="flex flex-wrap"
              alwaysShowTruncator
              renderTruncator={({ hiddenItemsCount }) => {
                if (hiddenItemsCount > 0) {
                  return (
                    <>
                      <button
                        data-tooltip-id="techstack-tooltip"
                        data-tooltip-html={techStack
                          .slice(-hiddenItemsCount)
                          .map((tech) => `<a class="hover:text-gray-500" href="${tech.url}" target="_blank">${tech.name}</a>`)
                          .join("<br>")}
                        className="cursor-pointer hover:underline underline-offset-4"
                        onClick={expandTechList}
                      >
                        +{hiddenItemsCount}
                      </button>
                    </>
                  );
                } else {
                  return (
                    <button
                      className="cursor-pointer hover:underline underline-offset-4"
                      onClick={collapseTechList}
                    >
                      less
                    </button>
                  );
                }
              }}
              style={{
                gap: gapBetweenTechIcons,
                width: "90%",
                maxHeight: techListExpanded ? "none" : 25,
              }}
            >
              {techStack.map((tech, index) => (
                <TechIcon
                  key={index}
                  icon={tech.icon}
                  alt={tech.name}
                  url={tech.url}
                  style={tech.style}
                />
              ))}
            </TruncatedList>
          </Row>
          <Row className="pb-6">
            {duties.length > 0 && (
              <ul className="list-disc space-y-4 ml-5 text-lg">
                {duties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            )}
          </Row>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperienceCard;
