import React,{useState,useContext} from 'react';
import classes from "./Navbar.module.css";
import { Link } from "react-scroll"; 
import {animateScroll as scroll} from "react-scroll"
import themeContext,{themes} from '../../theme';

const ButtonTop = (props)=>{ 
    return (
        <div className={classes.ButtonTop} onClick={() => scroll.scrollToTop()}>
            <i className="fas fa-angle-up"></i>
        </div>
    ) 
}


const Navbar = ({click})=>{

    const [openMenu, setOpenMenu] = useState(false);

    const {themeSlected, setThemeSlected} = useContext(themeContext)

    const toggle = () =>{
        themeSlected === themes.dark
        ? setThemeSlected(themes.light)
        : setThemeSlected(themes.dark)
    }

return (
    <div className={`${classes.Navbar}`}>
       <div className={classes.Logo}>
            <p onClick={() => scroll.scrollToTop()}> {'<'} <span>VictorD</span> {'/>'} </p>
        </div>
        <nav onClick={() => {setOpenMenu(false)}} className={openMenu ?`${classes.Activo}`:"" }>
            <ul >
                <li>
                    <Link href="/" to="About" smooth={true} duration={700}>About</Link>
                </li>
                <li>
                    <Link href="/" to="Portafolio" smooth={true} duration={700}>Portafolio</Link>
                </li>
                <li>
                    <Link href="/" to="Contact" smooth={true} duration={700}>Contact</Link>
                </li>
                <li>
                    <div className={classes.Toogle} onClick={toggle}>
                        <i className="fas fa-moon"></i>
                    </div>
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
