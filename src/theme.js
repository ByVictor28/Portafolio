import React, { createContext } from "react";

export const themes = {
  dark: {
    color: "var(--white)",
    background: "var(--dark)",
    heroBackground: "var(--dark)",
    filter: "grayscale(1)",
    text: "white",
  },
  light: {
    color: "var(--dark)",
    background: "var(--white)",
    heroBackground: "transparent",
    filter: "grayscale(0)",
    text: "black",
  },
};

const themeContext = React.createContext(themes.dark);

export default themeContext;
