import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import Nav from './Components/Nav'
import Aboutme from './Components/Aboutme'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Skills from './Components/Skills'





function App() {

  
  return ( 
    <Router>
      <div>
         <Nav />
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
          </Route>






          <Landing  />
          <Aboutme />
          <Skills />
          
          
          
          
          
          
          
          
          {/* <Nav  />
          <Aboutme />
          
          <Projects />
          <Resume /> */}

        </Switch> 
      </div>
    </Router>
  
      

      
      
    
  );
}

export default App;
