import React from 'react';
import "../About/About.css";
import CodingLogo from "../../Resources/graduation.svg";
const Education=()=>{
    return(
        <>
        <h1 className="about-title">Education</h1>
        <div className="row about-container">
             <div className="col-12 offset-1 col-sm-3">
                 <img style={{display: "inline-block",marginTop:"90px"}}className="img-fluid img-picture" alt="Responsive image" src={CodingLogo}/>
             </div>
             <div className="content text-jusify col-12 col-sm-8">
             <h3 style={{display:'inline-block',borderBottom:'4px solid green',paddingBottom:'10px'}}>
                BE . COMPUTER SCIENCE
                </h3>
                <h5>
                    Sathyabama Institute Of Science and Technology, Chennai<br/>
                    2016 - 2020 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    CGPA - 7.5
                </h5>
                <h6>As a member of Google Developer Club, Sathyabama I participated in lot of hackathons and SME connects with leaders from various Companies</h6>
    <br/><br/>
    <h3 style={{display:'inline-block',borderBottom:'4px solid green',paddingBottom:'10px'}}>
                 HIGHER SECONDARY EDUCATION
                </h3>
                <h5>
                   Sri Chaitanya Junior College, Vijayawada<br/>
                    2014 - 2016 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    CGPA - 9.5
                </h5>
                <h6>I am Mathematics lover, I used to spend lot of my time solving problems
                <br/> I scored 98% in Mathematics Paper</h6>
                <br/><br/>
                <h3 style={{display:'inline-block',borderBottom:'4px solid green',paddingBottom:'10px'}}>
                SECONDARY SCHOOL OF EDUCATION
                </h3>
                <h5>
                    Bhashyam Educactional Institutions, Andhra Pradesh<br/>
                    2013 - 2014 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    CGPA - 9.5
                </h5>
                <h6>During my schooling I used to play lot of out door games<br/>
                I secured 100% in Maths & Science</h6>
            </div>
            </div>
        </>
    )
}
export default Education;