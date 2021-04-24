import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skills />

      <Contact />
    </div>
  );
}
