import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Portafolio from "./Components/Portafolio/Portafolio";
import {useContext,useState,useMemo} from "react";
import themeContext, {themes} from "./theme"

function App() {
  const [themeSlected, setThemeSlected] = useState(themes.dark)

  const themeProvider = useMemo(() => ({themeSlected,setThemeSlected}),[themeSlected,setThemeSlected]);
  const scrollEvent = (e) => {
    const target = e.target;
    console.log('Current scroll position:', target.scrollTop);
}
  return (

    <themeContext.Provider value={themeProvider}>
        <div style={{color:themeSlected.color,background:themeSlected.background}} onScroll={(e) => scrollEvent(e)}>
          {/* {console.log(themeSlected)} */}
          <Navbar/>    
          <Hero/>
          <div className="container">
            <About/>
            <Portafolio/>
            <Contact/>
          </div>
          <footer>
            <p>Copyright © 2021. Victor Manuel Delfin Santos</p>
            <p>All Rights Reserved</p>
          </footer>
        </div>
    </themeContext.Provider>
  );
}

export default App;
