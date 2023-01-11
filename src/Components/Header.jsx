// import React from "react";
import Navbar from "./Navbar";
import dashboard from '../images/webphoneimage.png'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {


  useEffect(() =>{
    AOS.init({duration:2000});
  },[]);

  return (
    <div id="main" data-aos="zoom-out-down">
      {/* <Navbar /> */}
      <div className="name">
        <h1>
          <span>NeoDisha</span>
        </h1>
        <h3>
          State of the art Shelf-fullness analysis platform.  
        </h3>
        
        <p>00
          Worried about how your stores are performing at this
          <br/> moment? Or Want to quickly analyse the live status of all
          <br/> your stores in a few easy
          steps?
           <p  style={{color:"black"}}>If yes, then DIShA is here to make your life easy! </p>
           
        </p>  
        <a href="#" className="cv-btn">
          Scroll Down
        </a>
        
      </div>
      <div className="image" data-aos="zoom-in-down">
      <img src={dashboard} alt=""/>
      </div>
    </div>
  );
}

export default Header;
