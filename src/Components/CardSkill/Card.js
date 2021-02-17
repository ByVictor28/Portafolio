import React from 'react'
import classes from "./Card.module.css"

const Card = ({icon,name})=>{ 
return (
    <div className={classes.Card}>
        <i className={icon}></i>
        <span>{name}</span> 
    </div>
) 
}

export default Card
