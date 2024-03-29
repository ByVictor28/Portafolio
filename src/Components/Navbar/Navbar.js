import React, { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import themeContext, { themes } from "../../theme";
import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";

const ButtonTop = (props) => {
  return (
    <div className={classes.ButtonTop} onClick={() => scroll.scrollToTop()}>
      <i className="fas fa-angle-up"></i>
    </div>
  );
};

const Navbar = ({ click }) => {
  const { t, i18n } = useTranslation();

  const [openMenu, setOpenMenu] = useState(false);

  const { themeSlected, setThemeSlected } = useContext(themeContext);

  const [spanishSelected, setSpanishSelected] = useState(false);

  const changeLanguage = (lng) => {
    if (lng === "es") {
      setSpanishSelected(true);
    } else {
      setSpanishSelected(false);
    }
    i18n.changeLanguage(lng);
  };

  const toggle = () => {
    themeSlected === themes.dark
      ? setThemeSlected(themes.light)
      : setThemeSlected(themes.dark);
  };

  return (
    <div className={`${classes.Navbar}`}>
      <div className={classes.Logo}>
        <p onClick={() => scroll.scrollToTop()}>
          {" "}
          {"<"} <span style={{ color: themeSlected.text }}>VictorD</span> {"/>"}{" "}
        </p>
      </div>

      <nav
        onClick={() => {
          setOpenMenu(false);
        }}
        className={openMenu ? `${classes.Activo}` : ""}
      >
        <i
          className={`fas fa-times ${classes.IconMenu}`}
          onClick={() => {
            setOpenMenu(false);
          }}
        ></i>
        <ul>
          <li>
            <Link
              href="/"
              style={{ color: themeSlected.text }}
              to="About"
              smooth={true}
              duration={700}
              onClick={() => setOpenMenu(false)}
            >
              {t("navbar.about")}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              style={{ color: themeSlected.text }}
              to="Portafolio"
              smooth={true}
              duration={700}
              onClick={() => setOpenMenu(false)}
            >
              {t("navbar.portafolio")}
            </Link>
          </li>
          <li>
            <Link
              href="/"
              style={{ color: themeSlected.text }}
              to="Contact"
              smooth={true}
              duration={700}
              onClick={() => setOpenMenu(false)}
            >
              {t("navbar.contact")}
            </Link>
          </li>
          <li>
            <div className={classes.Toogle} onClick={toggle}>
              {themeSlected === themes.dark ? (
                <i className={`fas fa-moon ${classes.Theme}`}></i>
              ) : (
                <i className={`fas fa-sun ${classes.Theme}`}></i>
              )}
            </div>
          </li>
          <div className={classes.Flags}>
            <FlagIcon
              className={!spanishSelected ? classes.disabled : ""}
              code="US"
              size={30}
              onClick={() => changeLanguage("en")}
            />
            <FlagIcon
              className={spanishSelected ? classes.disabled : ""}
              code="MX"
              size={30}
              onClick={() => changeLanguage("es")}
            />
          </div>
        </ul>
      </nav>
      {!openMenu ? (
        <i
          className={`fas fa-bars ${classes.Icon}`}
          onClick={() => {
            setOpenMenu(true);
          }}
        ></i>
      ) : (
        <i
          className={`fas fa-times ${classes.Icon}`}
          onClick={() => {
            setOpenMenu(false);
          }}
        ></i>
      )}
      <ButtonTop />
    </div>
  );
};

export default Navbar;
