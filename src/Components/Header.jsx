import React from "react";
import Navbar from "./Navbar";
import dashboard from '../images/neodisha_mobile.jpeg'

function Header() {
  return (
    <div id="main">
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
          Read More
        </a>
        
      </div>
      <div className="image">
      <img src={dashboard} alt=""/>
      </div>
    </div>
  );
}

export default Header;
