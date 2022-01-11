import React,{useState,useContext} from 'react';
import classes from "./Navbar.module.css";
import { Link } from "react-scroll"; 
import {animateScroll as scroll} from "react-scroll"
import themeContext,{themes} from '../../theme';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from "react-flag-kit";

const ButtonTop = (props)=>{ 
    return (
        <div className={classes.ButtonTop} onClick={() => scroll.scrollToTop()}>
            <i className="fas fa-angle-up"></i>
        </div>
    ) 
}


const Navbar = ({click})=>{
    const { t, i18n } = useTranslation();


    const [openMenu, setOpenMenu] = useState(false);

    const {themeSlected, setThemeSlected} = useContext(themeContext)

    const [spanishSelected, setSpanishSelected] = useState(false)
    
    const changeLanguage = (lng) => {
        if (lng === "es") {    
            setSpanishSelected(true)
        }else{
            setSpanishSelected(false)
        }
        i18n.changeLanguage(lng);
    }
    
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
                    <Link href="/" to="About" smooth={true} duration={700}>{t('navbar.about')}</Link>
                </li>
                <li>
                    <Link href="/" to="Portafolio" smooth={true} duration={700}>{t('navbar.portafolio')}</Link>
                </li>
                <li>
                    <Link href="/" to="Contact" smooth={true} duration={700}>{t('navbar.contact')}</Link>
                </li>
                <li>
                    <div className={classes.Toogle} onClick={toggle}>
                        {
                            themeSlected === themes.dark ? 
                            <i className={`fas fa-moon ${classes.Theme}`}></i>
                            :
                            <i className={`fas fa-sun ${classes.Theme}`}></i>
                        }
                    </div>
                </li>
            </ul>
            <div className={classes.Flags}>
                <FlagIcon className={!spanishSelected&&classes.disabled} code="US" size={30} onClick={() => changeLanguage('en')}/>
                <FlagIcon className={spanishSelected&&classes.disabled} code="MX" size={30} onClick={() => changeLanguage('es')}/>
            </div>
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
