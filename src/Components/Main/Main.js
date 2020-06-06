import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Main.css";

import CodingLogo from "../../Resources/download.jpeg";
class Main extends Component{
    render(){
        return(
    <div className="main-container">
        <div className="inside-container">
        <center><img style={{borderRadius:"50px"}}src={CodingLogo}/></center>
     
        <h1 className="main-heading">Hi, I'm Satya Upendra</h1>
        <p className="intro intro-font">
          A MERN Stack Developer, Cloud & DevOps Enthusiast, Problem Solver
        </p><div className="social-icon">
          <a
            href="https://github.com/satyaupendra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://medium.com/@satyaupendra.devabhaktineni9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} className="icon" />
          </a>
          <a
            href="https://twitter.com/satya_upendra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/satya-upendra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    </div>
        )
    }
}
export default Main;