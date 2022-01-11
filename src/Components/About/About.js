import React from 'react'
import Card from '../CardSkill/Card'
import classes from "./About.module.css"
import { useTranslation } from 'react-i18next';
const skills = [
    {icon:"fab fa-html5", name:"HTML 5"},
    {icon:"fab fa-css3-alt", name:"CSS 3"},
    {icon:"fab fa-sass", name:"SCSS"},
    {icon:"fab fa-js-square" , name:"JAVA SCRIPT"},
    {icon:"fab fa-react" , name:"REACT"},
    {icon:"fas fa-database" , name:"MONGOOSE"},
    {icon:"fab fa-git", name:"GIT"},
    {icon:"fab fa-node", name:"NODE JS"},
    {icon:"fab fa-react", name:"REACT / NEXT.JS"},   
    {icon:"fab fa-vuejs", name:"VUE 3"},   
]

const About = ()=>{ 
    const { t } = useTranslation();
return (
    <div id="About">
        <h2>Know me</h2>
        <div className={classes.About}>
            
                <div className={classes.Description}>
                    <h3>{t('knowMe.title')}</h3>
                    <p>{t('knowMe.part1')} &#x1F9D1; &#x200D; &#x1F393;</p>
                    <p>{t('knowMe.part2')} &#x1F604;</p>
                    <a className="button" href="/cv/VictorDelfin.pdf" target="_blank">{t('knowMe.cvButton')}</a>
                </div>

                <div>
                    <h3>{t('knowMe.SKILLS')}</h3>
                    <div className={classes.Skills}>
                        {skills.map((element,index) => <Card name={element.name} icon={element.icon} key={index} />)}
                    </div>
                </div>
        </div>
    </div>
) 
}

export default About;
