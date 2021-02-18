import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Portafolio from "./Components/Portafolio/Portafolio";


function App() {

  return (
    <div>
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
  );
}

export default App;
