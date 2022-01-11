import React from 'react'
import classes from "./Hero.module.css"
import { useTranslation } from 'react-i18next';

const Hero = (props)=>{ 
    const { t } = useTranslation();
return (
    <div className={classes.Hero}>
        <img src="/imagenes/laptop.jpg" alt="Hero image"></img>
        <div className={classes.Mask}>
            <div className={classes.Image}>
                <img src="/imagenes/Image.jpg" alt="Image User"></img>
            </div>
            <div className={classes.Description}>
                <span>{t('hero.hi')}!!!</span>
                <h1>{t('hero.iAm')} Victor Manuel Delfin Santos</h1>
                <span>--{t('hero.position')}--</span>
            </div>
        </div> 
    </div>
) 
}

export default Hero
