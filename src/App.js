import React from 'react';
import Main from './Components/Main/Main'
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Work from './Components/Work/Work';
import Skill from './Components/Skills/Skill';
import Project from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import "./App.css"
class App extends React.Component {
  render() {
    return (
      <div>
      <Main/>
     <About/>
      <Education/>
      <Work/>
      <Skill/>
     <Project/>
     <Contact/>
      </div>
    );
  }
}
export default App;