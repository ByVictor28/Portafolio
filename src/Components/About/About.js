import React from 'react'
import Card from '../CardSkill/Card'
import classes from "./About.module.css"

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
]

const About = ()=>{ 
return (
    <div id="About">
        <h2>Know me</h2>
        <div className={classes.About}>
            
                <div className={classes.Description}>
                    <h3>WHO AM I</h3>
                    <p>I'm Victor a computer systems engineering student and a freelancer Full Stack (MERN)  who is committed to delivering high-quality results. I love working with a team of talented individuals to achieve goals, and to help my fellow team members.&#x1F9D1; &#x200D; &#x1F393;	 </p>
                    <p>As a developer I try to create things that no one else has ever created before and I'm a life long learner &#x1F604;</p>
                    <a className="button" href="/cv/VictorDelfin.pdf" target="_blank">Download CV</a>
                </div>

                <div>
                    <h3>SKILLS</h3>
                    <div className={classes.Skills}>
                        {skills.map((element,index) => <Card name={element.name} icon={element.icon} key={index} />)}
                    </div>
                </div>
        </div>
    </div>
) 
}

export default About;
