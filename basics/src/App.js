import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import About from "./Aboutus/About.js";
import Client from "./Client/Client.js"
import Header1 from "./Header1/Header1.js";
import Ourbusiness from "./Ourbusiness/Ourbusiness.js";
import Services from "./Services/Services.js";
import Ourvision from "./Ourvision/Ourvision.js";
import Project from "./Projects/Projects.js";
import Careers from "./Careers/Careers.js";
import Contact from "./Contact/Contact.js";
import Service2 from "./Service2/Service2.js";


function App() {
  return (
    <div className="App container-fluid p-0">
      <Header/>
      <Header1/>
      <About/>
      <Ourvision/>
      <Ourbusiness/>
      <Client/>
      <Services/>
      <Service2/>
      <Project/>
      <Careers/>
      <Contact/>
  
    </div>
  );
}

export default App;
