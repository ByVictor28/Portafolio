import React,{useState} from 'react';
import classes from "./Navbar.module.css";

const Navbar = ()=>{

    const [openMenu, setOpenMenu] = useState(true);


return (
    <div className={`${classes.Navbar}`}>
       <div className={classes.Logo}>
            <p> {'<'} <span>VictorD</span> {'/>'} </p>
        </div>
        <nav onClick={() => {setOpenMenu(false)}} className={openMenu ?`${classes.Activo}`:"" }>
            <ul >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Portafolio</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav> 
        {
            !openMenu?
            <i className={`fas fa-bars ${classes.Icon}`} onClick={() => {setOpenMenu(true)}}></i>:
            <i className={`fas fa-times ${classes.Icon}`} onClick={() => {setOpenMenu(false)}}></i>
        }
    </div>
) 
}

export default Navbar
