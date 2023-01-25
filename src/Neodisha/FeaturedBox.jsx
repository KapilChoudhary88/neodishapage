import React, { useEffect } from "react";
// import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import dashboard from "../images/dashboard+mpbile.jpeg";

function FeaturedBox() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="fline">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position:"relative"
            // padding: "35px",
          }}
        >
          <img
            className="dashboard_image"
            src={dashboard}
            alt="img not found"
            style={{
              // marginTop: "150px",
              width: "90%",
              // padding: "35px",
              alignSelf: "end",
              borderRadius:'15px',
              position:"absolute",
              right: "-60px",
            }}
          />
        </div>
        <div className="section_our_solution">
          <div className="rowww" style={{position:"relative"}}>
            <div className="col-lg-12 col-md-12 col-sm-12" style={{position:"absolute", left:"-60px"}}>
              <div className="our_solution_category" >
                <div className="solution_cards_box">
                  <div className="solution_card" data-aos="fade-up-right">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                        alt="img not found"
                        style={{
                          margin: "1px",
                          padding: "5px",
                          height: "150px",
                          width: "160px",
                        }}
                      />

                      <g>
                        <path
                          src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                          fill="#fae19e"
                        />
                      </g>
                    </div>
                    <div className="solu_title">
                      <h3>Feature 1</h3>
                    </div>
                    <div className="solu_description">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      {/* <button type="button" className="read_more_btn">
                        Read More
                      </button> */}
                    </div>
                  </div>
                  <div className="solution_card" data-aos="fade-up-right">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                        alt="img not found"
                        style={{
                          margin: "px",
                          padding: "5px",
                          height: "150px",
                          width: "160px",
                        }}
                      />

                      <g>
                        <path
                          src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                          fill="#fae19e"
                        />
                      </g>
                    </div>
                    <div className="solu_title">
                      <h3>Feature 2</h3>
                    </div>
                    <div className="solu_description">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      {/* <button type="button" className="read_more_btn">
                        Read More
                      </button> */}
                    </div>
                  </div>
                </div>

                <div className="solution_cards_box sol_card_top_3">
                  <div className="solution_card" data-aos="fade-up-left">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                        alt="img not found"
                        style={{
                          margin: "1px",
                          padding: "5px",
                          height: "150px",
                          width: "160px",
                        }}
                      />

                      <g>
                        <path
                          src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                          fill="#fae19e"
                        />
                      </g>
                    </div>
                    <div className="solu_title">
                      <h3>Feature 3</h3>
                    </div>
                    <div className="solu_description">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      {/* <button type="button" className="read_more_btn">
                        Read More
                      </button> */}
                    </div>
                  </div>
                  <div className="solution_card" data-aos="fade-up-left">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                        alt="img not found"
                        style={{
                          margin: "1px",
                          padding: "5px",
                          height: "150px",
                          width: "160px",
                        }}
                      />

                      <g>
                        <path
                          src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
                          fill="#fae19e"
                        />
                      </g>
                    </div>
                    <div className="solu_title">
                      <h3>Feature 4</h3>
                    </div>
                    <div className="solu_description">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      {/* <button type="button" className="read_more_btn">
                        Read More
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBox;
