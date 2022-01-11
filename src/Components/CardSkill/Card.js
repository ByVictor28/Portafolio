import React, {useContext} from 'react'
import classes from "./Card.module.css"
import themeContext from "../../theme";

const Card = ({icon,name,children})=>{ 
    
    const {themeSlected, setThemeSlected} = useContext(themeContext)
    return (
        <div className={`${classes.Card} sombra`} style={{background:themeSlected.background,color:themeSlected.color}}>
            {
                children?
                children
                :
                <i className={icon}></i>
            }
            <span>{name}</span> 
        </div>
) 
}

export default Card
