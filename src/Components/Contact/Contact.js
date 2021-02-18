import React,{useContext} from 'react'
import classes from "./Contact.module.css"
import themeContext from "../../theme";

const CardContact = ({children})=>{ 
    
    const {themeSlected, setThemeSlected} = useContext(themeContext)
    return (
        <div className={`${classes.CardContact} sombra`} style={{color:themeSlected.color,background:themeSlected.background}}>
            {children}
        </div>
) 
}

const Contact = (props)=>{ 
    
    const {themeSlected, setThemeSlected} = useContext(themeContext)
return (
    <div className={classes.Contact} id="Contact">
        <h2>Contact me</h2> 
        <div>
            <CardContact>
                <a style={{color:themeSlected.color}} href="mailto:victormanu31611@gmail.com"><i className="fas fa-envelope"></i></a>
            </CardContact>
            <CardContact>
                <a style={{color:themeSlected.color}} href="" target="_blank" ><i className="fas fa-phone-alt"></i></a>
            </CardContact>
            <CardContact>
                <a style={{color:themeSlected.color}} href="https://github.com/ByVictor28" target="_blank"><i className="fab fa-github-square"></i></a>
            </CardContact>
            <CardContact>
                <a style={{color:themeSlected.color}} href="https://www.linkedin.com/in/victor-delfin-8a32a416a/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </CardContact>
        </div>
    </div>
) 
}

export default Contact
