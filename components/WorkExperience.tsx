import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import SlideShow from "./SlideShow";
import { Tech } from "@/interfaces/Tech";
import { Box } from "@material-ui/core";
import { Info, InfoCaption, InfoTitle } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";

interface Experience {
  companyLogo: string;
  companyName: string;
  companyThemeColor: string;
  title: string;
  techStack?: Tech[];
  startDate: string;
  endDate?: string;
  duties: string[];
}

function WorkExperience() {
  const experiences: Experience[] = [
    {
      companyLogo: "/experience/morgan-stanley.png",
      companyName: "Morgan Stanley",
      companyThemeColor: "#003986",
      title: "SRE Tech Analyst • Production Support • Programmer",
      startDate: "Jun 2022",
      techStack: [
        {
          name: "Shell/Bash",
          icon: "/skills/shell.png",
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
          icon: "/skills/flask.png",
          style: {
            backgroundColor: "white",
            padding: 1,
          },
          url: "https://flask.palletsprojects.com/en/2.3.x/",
        },
        {
          name: "pytest",
          icon: "/skills/pytest.png",
          url: "https://docs.pytest.org/",
          style: {
            backgroundColor: "white"
          }
        },
        {
          name: "Selenium",
          icon: "/skills/selenium.png",
          url: "https://www.selenium.dev/",
        },
        {
          name: "Sybase",
          icon: "/skills/sybase.png",
          url: "https://www.sap.com/products/technology-platform/sybase-ase.html",
        },
        {
          name: "IBM Db2",
          icon: "/skills/db2.webp",
          url: "https://www.ibm.com/products/db2",
        },
        {
          name: "Windows",
          icon: "https://raw.githubusercontent.com/danhalis/portfolio/master/public/skills/windows.png",
          url: "https://www.microsoft.com/software-download/windows10",
        },
        {
          name: "Linux",
          icon: "/skills/linux.png",
          url: "https://www.redhat.com/en/topics/linux/what-is-linux",
        },
        {
          name: "Andrew File Systen (AFS)",
          icon: "/skills/afs.png",
          url: "https://www.openafs.org/",
        },
        {
          name: "AutoSys",
          icon: "/skills/autosys.png",
          url: "https://www.broadcom.com/products/software/automation/autosys",
        },
        {
          name: "IBM MQ",
          icon: "/skills/ibm-mq.png",
          url: "https://www.ibm.com/products/mq",
        },
        {
          name: "Prometheus",
          icon: "/skills/prometheus.png",
          url: "https://prometheus.io/",
        },
        {
          name: "Grafana",
          icon: "/skills/grafana.png",
          url: "https://grafana.com/",
        },
        {
          name: "Splunk",
          icon: "/skills/splunk.png",
          url: "https://www.splunk.com/",
        },
        {
          name: "ServiceNow",
          icon: "/skills/servicenow.png",
          url: "https://www.servicenow.com/",
        },
        {
          name: "PagerDuty",
          icon: "/skills/pagerduty.png",
          url: "https://www.pagerduty.com/",
        },
        {
          name: "Bitbucket",
          icon: "/skills/bitbucket.png",
          url: "https://bitbucket.org/",
        },
        {
          name: "Jira",
          icon: "/skills/jira.png",
          url: "https://www.atlassian.com/software/jira",
        },
        {
          name: "Jenkins",
          icon: "/skills/jenkins.png",
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
      companyLogo: "/experience/diverst.jpg",
      companyName: "Diverst",
      companyThemeColor: "#7C76CE",
      title: "Full Stack Developer",
      startDate: "Jan 2022",
      endDate: "May 2022",
      techStack: [
        {
          name: "React.js",
          icon: "https://reactnative.dev/img/header_logo.svg",
          url: "https://reactjs.org/",
        },
        {
          name: "Redux",
          icon: "/skills/redux.svg",
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
          icon: "/skills/spring.svg",
          url: "https://spring.io/projects/spring-framework",
        },
        {
          name: "Ruby",
          icon: "/skills/ruby.png",
          url: "https://www.ruby-lang.org/",
        },
        {
          name: "Ruby on Rails",
          icon: "/skills/rails.png",
          url: "https://rubyonrails.org/",
        },
        {
          name: "webpack",
          icon: "/skills/webpack.png",
          url: "https://webpack.js.org/",
        },
        {
          name: "PostgreSQL",
          icon: "/skills/postgresql.png",
          url: "https://www.postgresql.org/",
        },
        {
          name: "Redis",
          icon: "/skills/redis.png",
          url: "https://redis.io/",
        },
        {
          name: "Sidekiq",
          icon: "/skills/sidekiq.svg",
          url: "https://sidekiq.org/",
        },
        {
          name: "Material UI (MUI)",
          icon: "/skills/mui.png",
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
          icon: "/skills/playwright.png",
          url: "https://playwright.dev/",
        },
        {
          name: "GitHub",
          icon: "/skills/github.png",
          url: "https://github.com/",
        },
        {
          name: "Linux",
          icon: "/skills/linux.png",
          url: "https://www.redhat.com/en/topics/linux/what-is-linux",
        },
        {
          name: "WSL",
          icon: "/skills/wsl.png",
          url: "https://learn.microsoft.com/windows/wsl/about",
        },
        {
          name: "Jira",
          icon: "/skills/jira.png",
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
  return (
    <div
      className="
      h-auto sm:h-screen max-w-7xl
      flex flex-col items-center
      px-10 mx-auto overflow-hidden"
    >
      <h3 className="section-title">Work Experience</h3>

      <article className="grid grid-cols-3 gap-8">
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
              {experiences[currentIndex].title}
            </InfoTitle>
            <ul className="list-disc space-y-4 ml-5 text-lg">
              {experiences[currentIndex].duties.map((duty, index) => (
                <li key={index}>
                  <InfoCaption>{duty}</InfoCaption>
                </li>
              ))}
            </ul>
          </Info>
        </Box>
      </article>
    </div>
  );
}

export default WorkExperience;