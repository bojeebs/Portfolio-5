import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home id="home" />
      <Skills id="skills" />
      <Projects id="projects" />
      {/* <Aboutme id="aboutme" /> */}
    </div>
  );
}

export default App;
