import React from 'react';
import "../About/About.css";
import WorkLogo from "../../Resources/work.svg";
const Work=()=>{
    return(
        <>
        <h1 className="about-title">Work</h1>
        <div className="row about-container">
             <div className="col-12 offset-1 col-sm-3">
                 <img style={{marginTop:"40px"}}className="img-fluid img-picture" alt="Responsive image" src={WorkLogo}/>
             </div>
             <div className="content text-jusify col-12 col-sm-8">
             <h3 style={{display:'inline-block',borderBottom:'4px solid green',paddingBottom:'10px'}}>
               PROGRAMMER ANALYST TRAINEE
                </h3>
                <h5>
                    Cognizant Technology Solutions, Chennai<br/>
                    18/01/2020 - 15/05/2020
                </h5>
                <h6>Learned Azure and Azure Devops Tool<br/>Created CI/CD pipelines in Azure Devops and Integrated many Third Party Tools to the Pipeline<br/>Recieved Special team award from Cognizant Academy</h6>    
            </div>
            </div>
        </>
    )
}
export default Work;