import React from 'react'
import classes from "./Hero.module.css"

const Hero = (props)=>{ 
return (
    <div className={classes.Hero}>
        <img src="/imagenes/laptop.jpg" alt="Hero image"></img>
        <div className={classes.Mask}>
            <div className={classes.Image}>
                <img src="/imagenes/Image.jpg" alt="Image User"></img>
            </div>
            <div className={classes.Description}>
                <span>Hi!!!</span>
                <h1>I'm Victor Manuel Delfin Santos</h1>
                <span>--Full Stack Developer--</span>
            </div>
        </div> 
    </div>
) 
}

export default Hero
