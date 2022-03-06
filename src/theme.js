import React, { createContext } from "react";

export const themes = {
  dark: {
    color: "var(--white)",
    background: "var(--dark)",
    heroBackground: "rgba(0, 0, 0, .6)",
    filter: "grayscale(1)",
    text: "white",
  },
  light: {
    color: "var(--dark)",
    background: "var(--white)",
    heroBackground: "rgba(255, 255, 255, .3)",
    filter: "grayscale(0)",
    text: "black",
  },
};

const themeContext = React.createContext(themes.dark);

export default themeContext;
