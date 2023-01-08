import React from "react";
import "./HowitWork.css";

function HowitWork() {
  return (
    <div className=" howitwork" style={{ paddingBottom: "130px" }}>
      <article className="steps">
        <header className="heading">
          <h2
            className="heading__title"
            style={{
              fontFamily: "Poppins , sans-serif",
              color: "black",
              fontSize: "30px",
              fontWeight: "20px",
            }}
          >
            How does it work?
          </h2>
        </header>
        <ul className="steps-list">
          <li className="steps-list__item animated fadeIn" id="step1">
            <span
              className="steps-list__number"
              style={{ fontSize: "18px", fontWeight: "20px" }}
            >
              Step 1
            </span>
            <div className="steps-list__desc">
              <p style={{ fontSize: "16px", fontWeight: "10px" }}>
                <strong style={{ fontWeight:"bold"}}>
                  Live Image Capturing</strong> 
                  <br/>
                  <br/> Live vision data of the shelves is captured, either by surveillance cameras or through mobile apps.
              </p>
            </div>
          </li>
          <li
            className="steps-list__item animated fadeIn"
            id="step2"
            style={{ animationDelay: "0.3s" }}
          >
            <span
              className="steps-list__number"
              style={{ fontSize: "18px", fontWeight: "20px" }}
            >
              Step 2
            </span>
            <div className="steps-list__desc">
              <p style={{ fontSize: "16px", fontWeight: "10px" }}>
                <strong>Shelf-Fullness
                      Analysis</strong>
                      <br/>
                      <br/> This data is streamed to the Disha Analytics Backend and AI/ML engine for the Shelf-fullness Analysis. 

              </p>
            </div>
          </li>
          <li
            className="steps-list__item animated fadeIn"
            id="step3"
            style={{ animationDelay: "0.6s" }}
          >
            <span
              className="steps-list__number"
              style={{ fontSize: "18px", fontWeight: "20px" }}
            >
              Step 3
            </span>
            <div className="steps-list__desc">
              <p style={{ fontSize: "16px", fontWeight: "10px" }}>
                <strong>Analytics Dashboard 
                  </strong>
                  <br/>
                  <br/>  The analysis results are saved to database and the
         aggregated reports are displayed on the Web Application.
        
              </p>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default HowitWork;
