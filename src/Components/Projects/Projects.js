import React from 'react';
import "../About/About.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "./Projects.css";
import library from "../../Resources/library.png";
import github from "../../Resources/github.svg"
import table from "../../Resources/table.svg"
import blog from "../../Resources/blog.webp"
import translator from "../../Resources/translator.jpeg"
import api from '../../Resources/api.svg'
import codesandbox from "../../Resources/codesandbox.png";
import hotel from "../../Resources/hotel.png"
import boston from "../../Resources/boston.png"
const Project=()=>{
    return(
        <>
        <h1 className="about-title">Projects</h1>
        <div className="row about-container">
             <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={library} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Library Management App</h5>
              <p class="card-text">Simple React App which will show the list of books. User can add and remove books from cart and also Can check out the books</p>
            </div>
        </FrontSide>
    <BackSide>
        <a
            href="https://github.com/satyaupendra/satya-library"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={table} height="270" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Dynamic Tables and Grid</h5>
              <p class="card-text">Simple React App which will render a dynamic table which is sortable in ascending and descending order and also easily filterable based on properties. </p>
            </div>
        </FrontSide>
    <BackSide>
        <a
            href="https://github.com/satyaupendra/rocketgrid6"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={blog} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Simple Blog using React</h5>
              <p class="card-text">Simple React App which will show the list of posts. User can read and write postsand also Can edit the posts
              </p></div>
        </FrontSide>
    <BackSide>
        <a
            href="https://github.com/satyaupendra/satya-library"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={translator} alt="Card image cap" width="280" height="270"/>
            <div class="card-body">
              <h5 class="card-title">Transliterator App</h5>
              <p class="card-text">Simple React App which will show the list of books. User can add and remove books from cart and also Can check out the books</p>
            </div>
        </FrontSide>
    <BackSide>
        <a
            href="https://github.com/satyaupendra/transliterator"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy><br/>
              </div>
              
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={api} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Text Retrieval API</h5>
              <p class="card-text">A Rest API with end point to get pincode for the mobile number and filter mobile numbers based on pincode</p>
            </div>
        </FrontSide>
    <BackSide>
        <a
            href="https://codesandbox.io/s/github/satyaupendra/TextRetrival"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img style={{marginTop:"80px",paddingRight:"20px"}}src={codesandbox} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={api} height="270" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Event Management  API</h5>
              <p class="card-text">Developed the REST API's which are used to retrieve the events for the given ticket price, pincode and search keyword.</p>
            </div>
        </FrontSide>
    <BackSide>
        <a
            href="https://github.com/satyaupendra/event-management-task-mysql"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={hotel} alt="Card image cap" height="270"/>
            <div class="card-body">
              <h5 class="card-title">Static Hotel Website</h5>
              <p class="card-text">Simple Web Application which was built using HTML5 and CSS3
              </p></div>
        </FrontSide>
    <BackSide>
        <a
            href="https://satyaupendra.github.io/HTML-CSS-1-/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
              <div className="col-12 col-sm-3">
             <Flippy flipOnHover={true} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '500px' }}>
        <FrontSide>
            <img class="card-img-top" src={boston} alt="Card image cap" width="280" height="270"/>
            <div class="card-body">
              <h5 class="card-title">House Price Prediction</h5>
              <p class="card-text">A Regression Model which predicts the house price based on the trained data set</p>
            </div>
        </FrontSide>
    <BackSide>
        <a
            href="https://github.com/satyaupendra/Boston-house-price-prediction"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img style={{marginTop:"80px"}}src={github} width="280" height="240"/>
          </a>
    </BackSide>
</Flippy>
              </div>
        </div>
    </>
    )
}
export default Project;