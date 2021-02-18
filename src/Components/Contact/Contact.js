import React from 'react'
import classes from "./Contact.module.css"

const CardContact = ({children})=>{ 
return (
    <div className={`${classes.CardContact} sombra`}>
        {children}
    </div>
) 
}

const Contact = (props)=>{ 
return (
    <div className={classes.Contact} id="Contact">
        <h2>Contact me</h2> 
        <div>
            <CardContact>
                <a href="mailto:victormanu31611@gmail.com"><i className="fas fa-envelope"></i></a>
            </CardContact>
            <CardContact>
                <a href="" target="_blank" ><i className="fas fa-phone-alt"></i></a>
            </CardContact>
            <CardContact>
                <a href="https://github.com/ByVictor28" target="_blank"><i className="fab fa-github-square"></i></a>
            </CardContact>
            <CardContact>
                <a href="https://www.linkedin.com/in/victor-delfin-8a32a416a/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </CardContact>
        </div>
    </div>
) 
}

export default Contact
