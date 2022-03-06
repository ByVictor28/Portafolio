import React from "react";
import Card from "../CardSkill/Card";
import classes from "./About.module.css";
import { useTranslation } from "react-i18next";
const skills = [
  { icon: "fab fa-html5", name: "HTML 5" },
  { icon: "fab fa-css3-alt", name: "CSS 3" },
  { icon: "fab fa-sass", name: "SCSS" },
  { icon: "fab fa-js-square", name: "JAVA SCRIPT" },
  { icon: "fab fa-react", name: "REACT" },
  { icon: "fas fa-database", name: "MONGOOSE" },
  { icon: "fab fa-git", name: "GIT" },
  { icon: "fab fa-node", name: "NODE JS" },
  { icon: "fab fa-react", name: "REACT / NEXT.JS" },
  { icon: "fab fa-vuejs", name: "VUE 3" },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="About">
      <h2>{t("knowMe.header")}</h2>
      <div className={classes.About}>
        <div className={classes.Description}>
          <h3>{t("knowMe.title")}</h3>
          <p>{t("knowMe.part1")} &#x1F9D1; &#x200D; &#x1F393;</p>
          <p>{t("knowMe.part2")} &#x1F604;</p>
          <a className="button" href="/cv/VictorDelfin.pdf" target="_blank">
            {t("knowMe.cvButton")}
          </a>
        </div>

        <div>
          <h3>{t("knowMe.subtitle")}</h3>
          <div className={classes.Skills}>
            {skills.map((element, index) => (
              <Card name={element.name} icon={element.icon} key={index} />
            ))}
            <Card name="Tailwind">
              <svg width="100" height="60" viewBox="0 -10 30 40" fill="#16BDCA">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0zM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9z"
                ></path>
              </svg>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
