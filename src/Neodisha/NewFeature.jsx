import React, { useEffect } from "react";
// import { useRef } from 'react';
// import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export const NewFeature = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <p className="heading1" data-aos="fade-down-right">
        What We Detect
      </p>
      <div className="outerCont">
        <div className="container-senti" data-aos="slide-right">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div
                  className="icon"
                  style={{ margin: "px", backgroundColor: "#e2705f" }}
                >
                  <center>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/6297/6297920.png"
                      alt="img not found"
                      style={{ marginTop: "15px" }}
                    />
                    <p className="senti-card-txt" style={{ marginTop: "15px" }}>
                      Live statistics
                    </p>
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
        <div className="container-senti " data-aos="slide-right">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div
                  className="icon"
                  style={{ margin: "0px", backgroundColor: "#3778C2" }}
                >
                  <center>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                      style={{
                        marginTop: "5px",
                        padding: "5px",
                        height: "150px",
                        width: "160px",
                      }}
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
        <div className="container-senti" data-aos="slide-left">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon" style={{ backgroundColor: "#9E15BF" }}>
                  <center>
                    <img
                      src="	https://static.thenounproject.com/png/3929574-200.png"
                      alt="img not found"
                      style={{
                        marginTop: "10px",
                        padding: "px",
                        height: "140px",
                        width: "150px",
                      }}
                    />
                    <p className="senti-card-txt" style={{ marginTop: "12px" }}>
                      Brand-wise Shelf share
                    </p>
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
        <div className="container-senti" data-aos="slide-right">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon" style={{ backgroundColor: "#EBA63F " }}>
                  <center>
                    <img
                      src="	https://cdn-icons-png.flaticon.com/128/1702/1702496.png"
                      alt="img not found"
                      style={{ marginTop: "12px" }}
                    />
                    <p className="senti-card-txt" style={{ marginTop: "15px" }}>
                      Planogram compliance
                    </p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2">
              <div className="content-senti">
                <p> Ensuring optimal shelf planogram</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-senti" data-aos="slide-left">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon" style={{ backgroundColor: "#3FD2C7" }}>
                  <center>
                    <img
                      src="	https://cdn-icons-png.flaticon.com/128/3566/3566336.png"
                      alt="img not found"
                      style={{
                        marginLeft: "4px",
                        padding: "px",
                        height: "140px",
                        width: "150px",
                      }}
                    />
                    <p className="senti-card-txt" style={{ marginTop: "15px" }}>
                      On-shelf SKU Listing
                    </p>
                  </center>
                </div>
              </div>
            </div>
            <div className="slide slide2" data-aos="slide-right">
              <div className="content-senti">
                <p> SKU counts & status on demand</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-senti" data-aos="slide-left">
          <div className="card-senti">
            <div className="slide slide1">
              <div className="content-senti">
                <div className="icon" style={{ backgroundColor: "#F92C85" }}>
                  <center>
                    <img
                      src="	https://cdn-icons-png.flaticon.com/128/4047/4047714.png"
                      alt="img not found"
                      style={{
                        margin: "0px",
                        padding: "5px",
                        height: "140px",
                        width: "150px",
                      }}
                    />
                    <p className="senti-card-txt" style={{ marginTop: "15px" }}>
                      Search
                    </p>
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
    </div>
  );
};
