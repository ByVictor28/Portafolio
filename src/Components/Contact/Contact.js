import React, { useContext } from "react";
import classes from "./Contact.module.css";
import themeContext from "../../theme";
import { useTranslation } from "react-i18next";

const CardContact = ({ children }) => {
  const { themeSlected, setThemeSlected } = useContext(themeContext);
  return (
    <div
      className={`${classes.CardContact} sombra`}
      style={{ color: themeSlected.color, background: themeSlected.background }}
    >
      {children}
    </div>
  );
};

const Contact = (props) => {
  const { t } = useTranslation();
  const { themeSlected, setThemeSlected } = useContext(themeContext);
  return (
    <div className={classes.Contact} id="Contact">
      <h2>{t(`contact`)}</h2>
      <div>
        <CardContact>
          <a
            style={{ color: themeSlected.color }}
            href="mailto:victormanu31611@gmail.com"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </CardContact>
        <CardContact>
          <a
            style={{ color: themeSlected.color }}
            href="http://web.whatsapp.com/send?text=Tu mensaje&phone=+524981238534&abid=+524981238534"
            target="_blank"
          >
            <i className="fas fa-phone-alt"></i>
          </a>
        </CardContact>
        <CardContact>
          <a
            style={{ color: themeSlected.color }}
            href="https://github.com/ByVictor28"
            target="_blank"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </CardContact>
        <CardContact>
          <a
            style={{ color: themeSlected.color }}
            href="https://www.linkedin.com/in/victordelfin/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </CardContact>
      </div>
    </div>
  );
};

export default Contact;
