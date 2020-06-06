import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import CodingLogo from "../../Resources/coding2.svg";
const About =()=>{
    return(
        <>
        <h1 className="about-title">About Me</h1>
        <div className="row about-container">
             <div className="col-12 offset-1 col-sm-3">
                 <img style={{marginTop:"40px"}} className="img-fluid img-picture" alt="Responsive image" src={CodingLogo}/>
             </div>
             <div className="content text-jusify  col-12 col-sm-8">
                <h3>
                Innovative and Creative Full Stack Developer with 
                expertise in JavaScript, React Js, Express Js, MongoDB and
                 Data Structures.
                </h3><br/>
                <h3>
                I'm a problem solving enthusiast.
                 I love solving problems in HackerRank & Guvi Codekata and an Excellent team player who worked in many teams with curiosity 
                to learn new things from my friends and seniors and also shared my knowledge with them.
                </h3><br/>
                <h3>
                I am always open and motivated in learning new technologies and adapting to it.
                </h3>
            </div>
        </div>
        </>
       
    )
};
export default About;