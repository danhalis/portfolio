import React, { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import SlideShow from "../SlideShow";
import { Tech } from "@/interfaces/Tech";
import { Box } from "@material-ui/core";
import { Info, InfoCaption, InfoTitle } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { Tooltip } from "react-tooltip";
import { motion, useAnimation } from "framer-motion";
import { useDebounce } from "use-debounce";

interface Experience {
  companyLogo: string;
  companyName: string;
  companyWebsite: string;
  companyThemeColor: string;
  title: string;
  techStack?: Tech[];
  startDate: string;
  endDate?: string;
  duties: string[];
}

interface Props {
  onMount?: () => void;
}

function WorkExperience({
  onMount = () => {}
}: Props) {
  const experiences: Experience[] = [
    {
      companyLogo: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/experience/bnpparibas.jpg",
      companyName: "BNP Paribas CIB",
      companyWebsite: "https://cib.bnpparibas/",
      companyThemeColor: "#008859",
      title: "Developer • Production Support Analyst (Level 4)",
      startDate: "Jun 2022",
      techStack: [
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          url: "https://developer.mozilla.org/docs/Web/JavaScript",
        },
        {
          name: "Python",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/python.png",
          url: "https://www.python.org/",
        },
        {
          name: "Flask",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/flask.png",
          style: {
            backgroundColor: "white",
            padding: 1,
          },
          url: "https://flask.palletsprojects.com/en/2.3.x/",
        },
        {
          name: "Windows",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/windows.png",
          url: "https://www.microsoft.com/software-download/windows10",
        },
        {
          name: "Linux",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/linux.png",
          url: "https://www.redhat.com/en/topics/linux/what-is-linux",
        },
        {
          name: "AutoSys",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/autosys.png",
          url: "https://www.broadcom.com/products/software/automation/autosys",
        },
        {
          name: "ServiceNow",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/servicenow.png",
          url: "https://www.servicenow.com/",
        },
        {
          name: "Bitbucket",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/bitbucket.png",
          url: "https://bitbucket.org/",
        },
        {
          name: "Jenkins",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/jenkins.png",
          url: "https://www.jenkins.io/",
        },
      ],
      duties: [
        "Code and design fullstack apps as an individual contributor or a part of a development team as per the requirement and feasibility",
        "Create productivity tools that facilitates alert monitoring",
        "Manage application/infrustructure alerts for resolution and escalate for investigation",
        "Maintain documentation about alerts and process guidelines for resolution",
      ],
    },
    {
      companyLogo: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/experience/morgan-stanley.png",
      companyName: "Morgan Stanley",
      companyWebsite: "https://www.morganstanley.com/",
      companyThemeColor: "#003986",
      title: "SRE Tech Analyst • Production Support • Programmer",
      startDate: "Jun 2022",
      techStack: [
        {
          name: "Shell/Bash",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/shell.png",
          url: "https://www.shellscript.sh/",
        },
        {
          name: "C#",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
          url: "https://learn.microsoft.com/dotnet/csharp/",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          url: "https://developer.mozilla.org/docs/Web/JavaScript",
        },
        {
          name: "Python",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/python.png",
          url: "https://www.python.org/",
        },
        {
          name: "Flask",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/flask.png",
          style: {
            backgroundColor: "white",
            padding: 1,
          },
          url: "https://flask.palletsprojects.com/en/2.3.x/",
        },
        {
          name: "pytest",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/pytest.png",
          url: "https://docs.pytest.org/",
          style: {
            backgroundColor: "white"
          }
        },
        {
          name: "Selenium",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/selenium.png",
          url: "https://www.selenium.dev/",
        },
        {
          name: "Sybase",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/sybase.png",
          url: "https://www.sap.com/products/technology-platform/sybase-ase.html",
        },
        {
          name: "IBM Db2",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/db2.webp",
          url: "https://www.ibm.com/products/db2",
        },
        {
          name: "Windows",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/windows.png",
          url: "https://www.microsoft.com/software-download/windows10",
        },
        {
          name: "Linux",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/linux.png",
          url: "https://www.redhat.com/en/topics/linux/what-is-linux",
        },
        {
          name: "Andrew File Systen (AFS)",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/afs.png",
          url: "https://www.openafs.org/",
        },
        {
          name: "AutoSys",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/autosys.png",
          url: "https://www.broadcom.com/products/software/automation/autosys",
        },
        {
          name: "IBM MQ",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/ibm-mq.png",
          url: "https://www.ibm.com/products/mq",
        },
        {
          name: "Prometheus",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/prometheus.png",
          url: "https://prometheus.io/",
        },
        {
          name: "Grafana",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/grafana.png",
          url: "https://grafana.com/",
        },
        {
          name: "Splunk",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/splunk.png",
          url: "https://www.splunk.com/",
        },
        {
          name: "ServiceNow",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/servicenow.png",
          url: "https://www.servicenow.com/",
        },
        {
          name: "PagerDuty",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/pagerduty.png",
          url: "https://www.pagerduty.com/",
        },
        {
          name: "Bitbucket",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/bitbucket.png",
          url: "https://bitbucket.org/",
        },
        {
          name: "Jira",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/jira.png",
          url: "https://www.atlassian.com/software/jira",
        },
        {
          name: "Jenkins",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/jenkins.png",
          url: "https://www.jenkins.io/",
        },
      ],
      duties: [
        "Monitor & resolve/respond to user-reported issues, system/application alerts",
        "Manage coverage during North American market hours, including weekend Ready-for-Business checks",
        "Maintain and update team shared knowledge/documentation",
        "Write CLI tools and batch scripts to automate, accelerate complex tasks and reduce toils",
        "Write Ready-for-Business checks (RFB) for weekend automation",
      ],
    },
    {
      companyLogo: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/experience/diverst.jpg",
      companyName: "Diverst",
      companyWebsite: "https://diverst.com/",
      companyThemeColor: "#7C76CE",
      title: "Full Stack Developer",
      startDate: "Jan 2022",
      endDate: "May 2022",
      techStack: [
        {
          name: "React.js",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/react.png",
          url: "https://reactjs.org/",
        },
        {
          name: "Redux",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/redux.png",
          url: "https://playwright.dev/",
          style: {
            backgroundColor: "white",
            padding: 2,
          },
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          url: "https://developer.mozilla.org/docs/Web/JavaScript",
        },
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          url: "https://www.typescriptlang.org/",
        },
        {
          name: "Java",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/java.png",
          url: "https://www.java.com/",
          style: {
            backgroundColor: "white"
          },
        },
        {
          name: "Spring",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/spring.png",
          url: "https://spring.io/projects/spring-framework",
        },
        {
          name: "Ruby",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/ruby.png",
          url: "https://www.ruby-lang.org/",
        },
        {
          name: "Ruby on Rails",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/rails.png",
          url: "https://rubyonrails.org/",
        },
        {
          name: "webpack",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/webpack.png",
          url: "https://webpack.js.org/",
        },
        {
          name: "PostgreSQL",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/postgresql.png",
          url: "https://www.postgresql.org/",
        },
        {
          name: "Redis",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/redis.png",
          url: "https://redis.io/",
        },
        {
          name: "Sidekiq",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/sidekiq.png",
          url: "https://sidekiq.org/",
        },
        {
          name: "Material UI (MUI)",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/mui.png",
          url: "https://mui.com/",
          style: {
            backgroundColor: "white"
          },
        },
        {
          name: "react-hook-form",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/react-hook-form.png",
          url: "https://www.react-hook-form.com/",
        },
        {
          name: "Storybook",
          icon: "skills/storybook.svg",
          url: "https://storybook.js.org/",
        },
        {
          name: "Playwright",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/playwright.png",
          url: "https://playwright.dev/",
        },
        {
          name: "GitHub",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/github.png",
          url: "https://github.com/",
        },
        {
          name: "Linux",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/linux.png",
          url: "https://www.redhat.com/en/topics/linux/what-is-linux",
        },
        {
          name: "WSL",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/wsl.png",
          url: "https://learn.microsoft.com/windows/wsl/about",
        },
        {
          name: "Jira",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/jira.png",
          url: "https://www.atlassian.com/software/jira",
        },
      ],
      duties: [
        "Programming and code review",
        "Complete user stories and fix bugs in backlog",
        "Implement new app features for both frontend and backend (adding new app UI components, implementing/work with REST APIs, update database schemas)",
        "Write End-to-End UI tests for QA purposes",
        "Attend team daily and retrospective meetings",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [debouncedCurrentIndex] = useDebounce(currentIndex, 500);
  const expDescAnimationControls = useAnimation();

  useEffect(() => {
    onMount();
    const animateExpDesc = async () => {
      // Make experience description fade away
      await expDescAnimationControls.start({ opacity: 0 }, { duration: 0.5 });
      // Make experience description appear
      expDescAnimationControls.start({ opacity: 1 }, { duration: 0.5 });
    }
    // Animate experience description whenever the index changes
    animateExpDesc();
  }, [currentIndex]);

  return (
    <div
      className="
      h-auto sm:h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto overflow-hidden"
    >
      <h3 className="section-title">Work Experience</h3>

      <article className="grid grid-cols-3 gap-8">
        <Tooltip id="techstack-tooltip" className="z-10 text-sm" clickable place="right"/>
        {/* Putting SlideShow in another div to prevent its height from growing */}
        <div className="col-span-1">
          <SlideShow
            onIndexChanged={(index) => {
              setCurrentIndex(index);
            }}
          >
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                companyLogo={exp.companyLogo}
                companyLogoClassName="w-20 h-20 xl:w-28 xl:h-28"
                companyName={exp.companyName}
                companyWebsite={exp.companyWebsite}
                companyThemeColor={exp.companyThemeColor}
                startDate={exp.startDate}
                endDate={exp.endDate}
                techStack={exp.techStack}
              />
            ))}
          </SlideShow>
        </div>

        <Box className="col-start-2 col-span-2">
          <Info
            className="flex flex-col space-y-3"
            useStyles={useGalaxyInfoStyles}
          >
            <InfoTitle className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light mb-1">
              <motion.span animate={expDescAnimationControls}>{experiences[debouncedCurrentIndex].title}</motion.span>
            </InfoTitle>
            <motion.ul className="list-disc space-y-4 ml-5 text-lg"
              animate={expDescAnimationControls}
            >
              {experiences[debouncedCurrentIndex].duties.map((duty, index) => (
                <li key={index}>
                  <InfoCaption>{duty}</InfoCaption>
                </li>
              ))}
            </motion.ul>
          </Info>
        </Box>
      </article>
    </div>
  );
}

export default WorkExperience;
