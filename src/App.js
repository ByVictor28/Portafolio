import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";


function App() {

  return (
    <div>

        <Navbar/>    
        <Hero/>
        <div className="container">
          <About/>
        </div>
    </div>
  );
}

export default App;
