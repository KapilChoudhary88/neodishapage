import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import animation from '../images/Metrics.mp4'

function Feature() {

  useEffect(() =>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div>
      <div className="pagesection wf-section"  data-aos="zoom-in-down">
        <div className="pagecontainer">
          <div className="featuresummary">
            <div className="featuresummary-column featuresummary-personaimage">
            <video width="580" height="410" loop muted autoPlay="autoplay">
              <source src={animation} type="video/mp4"/>
               <source src="movie.ogg" type="video/ogg"
               style={{"marginLeft": "-40px"}}
               />
              Your browser does not support the video tag.
                  </video>

            </div>
            <div className="featuresummary-column">
              <div className="featuresummary-text">
                <div className="pre-header"
                // style={{fontSize :"50px"}}
                ></div>
                <h3 className="heading h3 personaheading">Store Auditing</h3>
                <div className="text personasubhead">
                Store audit reports are automatically generated in real-time
                  by the brain (AI/ML engine) of DIShA. These comprehensive
                  reports are displayed on the web-app and periodically mailed
                  to the configured recipients.
                </div>
              </div>
              <div className="testimonial">
                {/* <img
                  src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b48038d33b04e2c4746784b_logo_chartmogul.png"
                  alt="ChartMogul logo"
                  className="testimonial-logo"
                /> */}
                <div className="testimonial-text">
                Using Image Recognition technology field sales force just take photo of store shelves and get complete list 
                of all SKUs visible for customers as well as advanced analytics about shelf share.
                </div>
                <div className="person">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
