import React from 'react'
import Card from '../CardSkill/Card'
import classes from "./About.module.css"

const skills = [
    {icon:"fab fa-html5", name:"HTML 5"},
    {icon:"fab fa-css3-alt", name:"CSS 3"},
    {icon:"fab fa-js-square" , name:"JAVA SCRIPT"},
    {icon:"fab fa-react" , name:"REACT"},
    {icon:"fas fa-database" , name:"MONGOOSE"},
    {icon:"fab fa-git", name:"GIT"},
    {icon:"fab fa-node", name:"NODE JS"},
]

const About = ()=>{ 
return (
    <div id="About">
        <h2>Know me</h2>
        <div className={classes.About}>
            
                <div className={classes.Description}>
                    <h3>WHO AM I</h3>
                    <p>I'm Victor a computer systems engineering student and a freelancer Full Stack (MERN) &#x1F9D1; &#x200D; &#x1F393;	 
                    <br></br>Developer from Zacatecas who never stop learning and want to create a bigth future &#x2600; </p>
                    <a className="button">Download CV</a>
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
