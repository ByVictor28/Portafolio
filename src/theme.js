import React,{createContext} from "react"

export const themes = {
    dark:{
        color:"var(--white)",
        background:"var(--dark)",
        filter: "grayscale(1)"
    },
    light:{
        color:"var(--dark)",
        background:"var(--white)",
        filter: "grayscale(0)"
    }
}

const themeContext = React.createContext(themes.dark)

export default themeContext;
         