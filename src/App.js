import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';
import Achivement from './Components/Achivement/Achivement';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Services/>
      <Project/>
      <Achivement/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
