import React from 'react';
import "../About/About.css";
import "./Skill.css"
import express from "../../Resources/expressjs-icon.svg";
import html from "../../Resources/html5-icon.svg";
import css from "../../Resources/css3.svg";
import react from "../../Resources/react-icon.svg"
import js from "../../Resources/javascript.svg";
import bootstrap from "../../Resources/bootstrap.svg";
import mongo from "../../Resources/mongodb-icon.svg";
import mysql from "../../Resources/mysql-icon.svg";
import postman from "../../Resources/postman-icon.svg";
import node from "../../Resources/nodejs.svg";

const Skill=()=>{
    return(<>
    <h1 className="about-title">Skills</h1>
        <div className="row about-container">
            <div className="col-sm-6">
            <li class="html"><img width="40" height="40" class="d-inline-block align-top" alt="" src={html}/></li>
            <li class="bootstrap"><img width="40" height="40" class="d-inline-block align-top" alt="" src={bootstrap}/></li>
            <li class="react"><img width="40" height="40" class="d-inline-block align-top" alt="" src={react}/></li>
            <li class="node"><img width="40" height="40" class="d-inline-block align-top" alt="" src={node}/></li>
            <li class="mysql"><img width="40" height="40" class="d-inline-block align-top" alt="" src={mysql}/></li>
            </div>
            <div className="col-sm-6">
            <li class="css"><img width="40" height="40" class="d-inline-block align-top" alt="" src={css}/></li>
            <li class="js"><img width="40" height="40" class="d-inline-block align-top" alt="" src={js}/></li>
            <li class="postman"><img width="40" height="40" class="d-inline-block align-top" alt="" src={postman}/></li> 
            <li class="exp"><img width="40" height="40" class="d-inline-block align-top" alt="" src={express}/></li>
            <li class="mongo"><img width="40" height="40" class="d-inline-block align-top" alt="" src={mongo}/></li>
            </div>
        </div>
        </>
    )
}
export default Skill;