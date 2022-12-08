import React from "react";
import "./HowitWork.css";

function HowitWork() {
  return (
    <div className=" howitwork" style={{paddingBottom:"130px"}}>
    <article className="steps"   >
      <header className="heading" >
        <h2 className="heading__title" style={{ fontFamily:"Poppins , sans-serif" ,  color:"#8FC1BB" ,  fontSize:"30px" , fontWeight:"20px"}}>How does it work?</h2>
      </header>
      <ul className="steps-list" >
        <li className="steps-list__item animated fadeIn" id="step1" >
          <span className="steps-list__number" style={{ fontSize:"18px" , fontWeight:"20px"}}>Step 1</span>
          <div className="steps-list__desc">
            <p style={{ fontSize:"16px" , fontWeight:"10px"}}>
              <strong style={{ fontSize:"16px" , fontWeight:"10px"}}>Take photo</strong> of the shop display that you want to
              check in point of sales. Make sure that photo is sharp and cover
              the entire exposition.
            </p>
          </div>
        </li>
        <li
          className="steps-list__item animated fadeIn"
          id="step2"
          style={{animationDelay: "0.3s"}}
        >
          <span className="steps-list__number" style={{ fontSize:"18px" , fontWeight:"20px"}}>Step 2</span>
          <div className="steps-list__desc">
            <p style={{ fontSize:"16px" , fontWeight:"10px"}}>
              <strong>Get real-time recommendations</strong> on your mobile
              device while still standing in front of the shelf. Detect all
              out-of-stock SKUs as well as shelf share and many more.
            </p>
          </div>
        </li>
        <li
          className="steps-list__item animated fadeIn"
          id="step3"
          style={{animationDelay: "0.6s"}}
        >
          <span className="steps-list__number" style={{ fontSize:"18px" , fontWeight:"20px"}}>Step 3</span>
          <div className="steps-list__desc">
            <p style={{ fontSize:"16px" , fontWeight:"10px"}}>
              <strong>Improve your shop display</strong> by adding missing
              product and rearranging the planogram.
            </p>
          </div>
        </li>
      </ul>
    </article>
    </div>
  );
}

export default HowitWork;
