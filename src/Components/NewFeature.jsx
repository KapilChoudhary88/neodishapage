import React, { useState } from 'react';
import { useRef } from 'react';
import "./NewFeature.css";

export const NewFeature = () => {
  return (
    <>
      <p className='heading1' >What We Detect</p>
      <div className="outerCont">
    
        <div className="container-senti">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon"
                style={{"margin": "1px", "backgroundColor": "#e2705f" }}
                >
                  <center>
                   
                   <img
                    src="https://cdn-icons-png.flaticon.com/128/6297/6297920.png"
                 
                  /> 
                    <p className="senti-card-txt">Live statistics</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p> On demand analysis reports</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container-senti">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon" style={{"margin": "1px", "backgroundColor": "#4aada9" }} >
                  <center>
                    <img
                    src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                    style={{"margin": "1px", "padding": "5px" , "height": "150px" , "width": "160px"}}
                    alt=""
                  />
                    <p className="senti-card-txt">Out of stock items</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p> Real-time alerts of missing items </p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container-senti">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon"
                style={{"margin": "1px", "backgroundColor": "#6eadd4" }}
                >
                  <center>
                   <img
                    src="	https://cdn-icons-png.flaticon.com/128/1237/1237725.png"
                    style={{"margin": "1px", "padding": "5px" , "height": "140px" , "width": "150px"}}
                    
                  /> 
                    <p className="senti-card-txt">Brand-wise Shelf share</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p> Ranking of the brands on shelf</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outerCont">
        <div className="container-senti">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon">
                  <center>
                   <img
                    src="	https://cdn-icons-png.flaticon.com/128/1702/1702496.png"
                    
                  /> 
                    <p className="senti-card-txt">Planogram compliance</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p>  Ensuring optimal shelf planogram</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container-senti">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon">
                  <center>
                   <img
                    src="	https://cdn-icons-png.flaticon.com/128/3566/3566336.png"
                    style={{"margin": "1px", "padding": "5px" , "height": "140px" , "width": "150px"}}
                    
                  /> 
                    <p className="senti-card-txt">On-shelf SKU Listing</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p> SKU counts & status on demand</p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="container-senti">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon">
                  <center>
                  <img
                    src="	https://cdn-icons-png.flaticon.com/128/4047/4047714.png"
                    style={{"margin": "1px", "padding": "5px" , "height": "140px" , "width": "150px"}}
                    
                  /> 
                    <p className="senti-card-txt">Search</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p>Natureal</p>
                <p>Natureal</p>
                <p>Natureal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
