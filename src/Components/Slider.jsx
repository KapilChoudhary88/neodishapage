import React from "react";
import "./Slider.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Carousel from "react-multi-carousel";
import featureimage from "../images/th1.jpg";

import Carousel from "react-elastic-carousel";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import Item from "./Item";
import FeatureBox from "./FeatureBox";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
};

function Slider() {
  return (
    
    <div className="container-box">
      <div className="why-us-neo">
        <Row className="row">
          <Col md={4} sm={4} xs={4}>
            <div className="neometry_div_1">
              <center>
                <div class="box-neometry-1">
                  <div className="box-neometry-1-inner">
                    <p className="box-text-title">Help Your Business Win</p>
                    <p className="box-text-subtitle">
                      Neophyte has provided warehouse solutions to over 10
                      clients across different industries and fields.
                    </p>
                    <button className="requestSolution">
                      Find Your Solution
                    </button>
                  </div>
                </div>
              </center>
            </div>
          </Col>
          <Col className="cursuelcark">
            <div className="neomet-second-right-cards">
              {/* <Carousel
                autoPlay={false}
                autoPlaySpeed={1600}
                ssr
                partialVisible
                itemClass="image-item"
                responsive={responsive}
                itemsToShow={3}
                
              >
                <div className="horizon">
                  <div className="neometry_div_1">
                    <center>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img
                            src={
                              "https://imgs.search.brave.com/ly0l_XShM4iwNAP7yExIk0EPPdjsSZTEEfdT3bPirAA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/STlQVno5cExrc0ZQ/MXNkNnUtZWV3SGFI/YSZwaWQ9QXBp"
                            }
                            style={{ height: 55, width: 55 }}
                          />
                          <p className="box-text-title-2">
                            Low-Touch / No-Touch
                          </p>
                          <p className="box-text-subtitle-2">
                            Neophyte has provided warehouse solutions to over 10
                            clients across different industries and fields.
                            Warehouse solutions to over 10 clients across
                            different industries
                          </p>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="neometry_div_1">
                    <center>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img
                            src={
                              "https://imgs.search.brave.com/HXVc2icJ3NHgGoiJdxmANjeiqaL0EfVk2sDav3HBiNQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/aHNWQ2hjM1RDQXJw/YW9Nd2RhTFVBSGFI/YSZwaWQ9QXBp"
                            }
                            style={{ height: 55, width: 55 }}
                          />
                          <p className="box-text-title-2">
                            Sustainable AI & ML Vision
                          </p>
                          <p className="box-text-subtitle-2">
                            Neophyte has provided warehouse solutions to over 10
                            clients across different industries and fields.
                            Warehouse solutions to over 10 clients across
                            different industries
                          </p>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="neometry_div_1">
                    <center>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img
                            src={
                              "https://imgs.search.brave.com/rpmV5hoJFRFpUZG42NlG84UAMp_AqvXC5oEUZdg77-A/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/UXJZbldZdkRRWnlB/MURPa1o3aHZRSGFI/YSZwaWQ9QXBp"
                            }
                            style={{ height: 55, width: 55 }}
                          />
                          <p className="box-text-title-2">
                            Fit For All Box Sizes
                          </p>
                          <p className="box-text-subtitle-2">
                            Neophyte has provided warehouse solutions to over 10
                            clients across different industries and fields.
                            Warehouse solutions to over 10 clients across
                            different industries
                          </p>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="neometry_div_1">
                    <center>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img
                            src={
                              "https://imgs.search.brave.com/PLACDgSiA69cTCuwzMNUI9h-bE1MO8A5BalKovoHlEI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UUNGVHAzdUpGT3c1/Z3pnZnpxYWxRSGFI/YSZwaWQ9QXBp"
                            }
                            style={{ height: 55, width: 55 }}
                          />
                          <p className="box-text-title-2">Plug & Play</p>
                          <p className="box-text-subtitle-2">
                            Neophyte has provided warehouse solutions to over 10
                            clients across different industries and fields.
                            Warehouse solutions to over 10 clients across
                            different industries
                          </p>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </Carousel> */}

<Carousel itemsToShow={3}>
        
        <Item className="item1">
          <FeatureBox image = {featureimage} title = "Missing Product"  paragraph ="sit amet consectetur adipisicing elit"/>
          </Item>
        <Item className="item2">
          <FeatureBox image = {featureimage} title = "Missing Product"  paragraph ="sit amet consectetur adipisicing elit" />
          </Item>
        <Item className="item3">
          <FeatureBox image = {featureimage} title = "Missing Product" paragraph ="sit amet consectetur adipisicing elit" />
          </Item>
        <Item className="item4">
          <FeatureBox image = {featureimage} title = "Missing Product" paragraph ="sit amet consectetur adipisicing elit" />
          </Item>
        <Item className="item5">
          <FeatureBox image = {featureimage} title = "Missing Product"  paragraph ="sit amet consectetur adipisicing elit" />
          </Item>
        <Item className="item6">
          <FeatureBox image = {featureimage} title = "Missing Product" paragraph ="sit amet consectetur adipisicing elit" />
          </Item>
        
      </Carousel>
             
            </div>
          </Col>
        </Row>
      </div>
      
    </div>                                                                           
  
  );
}

export default Slider;
