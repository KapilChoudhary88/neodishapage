import React, { useEffect } from 'react';
// import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../images/animation2.mp4'



function SecondMonitor() {

  useEffect(() =>{
    AOS.init({duration:2000});
  },[]);

  return (
    <div>
      
      
      <div class="pagesection">
        <div class="pagecontainer">
          <div class="featuresummary featuresummary--reversed">
            <div class="featuresummary-column featuresummary-personaimage" data-aos="fade-down-left">
              
              <video width="580" height="410" loop muted autoPlay="autoplay">
              <source src={video} type="video/mp4"/>
               <source src="movie.ogg" type="video/ogg"
              //  style={{"marginLeft": "500px"}}
               />
              Your browser does not support the video tag.
                  </video>
                
            </div>
            <div class="featuresummary-column"
            style={{"marginLeft": "70px" }}>
              <div class="featuresummary-text">
                <div class="pre-header" 
                style={{"marginTop": "60px","marginLeft": "10px" , "fontWeight":"800"}} >
                
                </div>
              </div>
              <h3 class="heading h3 personaheading"data-aos="fade-up-right">Store Monitoring</h3>
              <div class="text personasubhead" data-aos="fade-up-right"
              style={{"marginTop": "30px" , "fontWeight":"500"}}>
                In-store shelves are continuously monitored through the eyes
                  (Surveillance cameras / mobile application) of DIShA. This
                  continuos stream of data is pushed to the brain for further
                  processing. —- As it is intelligently said, "Shelf is full!
                  Sale is high!" Thus, DIShA continuosly analyses the fullness
                  of all the monitored shelves.
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SecondMonitor;
