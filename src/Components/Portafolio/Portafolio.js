import React,{useContext} from 'react';
import classes from "./Portafolio.module.css";
import themeContext from "../../theme";

const Project = ({name,image,description,linkPage,linkRepository})=>{ 
    
    const {themeSlected, setThemeSlected} = useContext(themeContext);

    return (
        <div className={`${classes.Project} sombra`} id="Portafolio" style={{filter:themeSlected.filter}}>
            <div className={classes.Image}>
                <img src={`/imagenes/Projects/${image}`} alt="Project"/>
            </div>
            <div className={classes.Mask} >
                <div className={classes.Content}>
                    <h4>{name}</h4>
                    <span>{description}</span>
                    
                    <div className={classes.Source}>
                        <a href={linkPage} target="_blank" className={"button"}>See project</a>
                        <a href={linkRepository} target="_blank" ><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

const ProjectList = [
    {name:"BDNA",image:"bdna.png",description:"Page in honor to a youtue chanell about gamer news",linkPage:"",linkRepository:""},
    {name:"Bienes raices",image:"NotFound.png",description:"Page made as an example of not found",linkPage:"https://cranky-williams-be276f.netlify.app/",linkRepository:"https://github.com/ByVictor28/Not-Found"},
    {name:"Blog cafe",image:"Social.png",description:"Social dashboard (backend cloud function)",linkPage:"https://sleepy-morse-3e809f.netlify.app/",linkRepository:"https://github.com/ByVictor28/social-dashboard"},
    {name:"Burger Builder",image:"burger.png",description:"Burger builder (React course)",linkPage:"",linkRepository:""},
    {name:"To do List",image:"Weather.png",description:"Weather App",linkPage:"https://hungry-liskov-e861c5.netlify.app/",linkRepository:"https://github.com/ByVictor28/Weather"},
    // {name:"",image:"",description:"",linkPage:"",linkRepository:""},
]

const Portafolio = ()=>{ 


    return (
    <div className={classes.Portafolio}>
        <h2>Portafolio</h2>
        <div className={classes.Projects}>
            {ProjectList.map((project,index) => {
                return (
                    <Project
                        key={`${index}-${project.name}`}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        linkPage={project.linkPage}
                        linkRepository={project.linkRepository}
                    
                    />
                )
            })}
        </div>
    </div>
) 
}

export default Portafolio
