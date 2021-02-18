import React,{useState} from 'react';
import classes from "./Navbar.module.css";
import { Link } from "react-scroll"; 
import {animateScroll as scroll} from "react-scroll"
const ButtonTop = (props)=>{ 
    return (
        <div className={classes.ButtonTop} onClick={() => scroll.scrollToTop()}>
            <i className="fas fa-angle-up" ></i>
        </div>
    ) 
}


const Navbar = ()=>{

    const [openMenu, setOpenMenu] = useState(false);


return (
    <div className={`${classes.Navbar}`}>
       <div className={classes.Logo}>
            <p> {'<'} <span>VictorD</span> {'/>'} </p>
        </div>
        <nav onClick={() => {setOpenMenu(false)}} className={openMenu ?`${classes.Activo}`:"" }>
            <ul >
                <li>
                    <Link href="/" to="#" >Home</Link>
                </li>
                <li>
                    <Link href="/" to="About" smooth={true} duration={1500}>About</Link>
                </li>
                <li>
                    <Link href="/" to="Portafolio">Portafolio</Link>
                </li>
                <li>
                    <Link href="/" to="Contact">Contact</Link>
                </li>
            </ul>
        </nav> 
        {
            !openMenu?
            <i className={`fas fa-bars ${classes.Icon}`} onClick={() => {setOpenMenu(true)}}></i>:
            <i className={`fas fa-times ${classes.Icon}`} onClick={() => {setOpenMenu(false)}}></i>
        }
        <ButtonTop/>
    </div>
) 
}

export default Navbar
