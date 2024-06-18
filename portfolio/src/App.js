
import About from './About';
import './App.css';
import Contact from './Contact';
import Implanttraining from './Implanttraining';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Implanttraining/>
      <Contact/>
    </div>
  );
}

export default App;
