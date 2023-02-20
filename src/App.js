import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Aboutme from './Components/Aboutme'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Skills from './Components/Skills'





function App() {

  
  return ( 
    
      <div className = "app">

          <Nav/>
          <Home />





          <Aboutme />
          <Skills />
          <Projects />
        
      








         {/* <Nav />
         <Switch>
          <Route exact path= "/">
            <Landing />
            </Route>
          <Route exact path= "Projects">
            <Projects />
            </Route> 
          <Route exact path = "About">
            <Aboutme />
            </Route>
          <Route exact path = "Resume">
            <Resume />
          </Route> */}


          
          
          
          
          
          
          
          
          {/* <Nav  />
          <Aboutme />
          
          <Projects />
          <Resume /> */}

       
      </div>
    
  
      

      
      
    
  );
}

export default App;
