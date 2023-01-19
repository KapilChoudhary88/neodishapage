import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import dashboard from '../images/dashboard+mpbile.jpeg'

function FeaturedBox() {

  useEffect(() =>{
    AOS.init({duration:2000});
  },[]);

  return (
    <div>
      <div className = "fline" >
      
      <img  className ="dashboard_image" src={dashboard}
      style={{
        marginTop: "150px",
        padding: "35px",
        }} />

        <div className="section_our_solution">
          <div className="rowww">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <div className="solution_card" data-aos="fade-up-right">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
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
                  <div className="solution_card"  data-aos="fade-up-right">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
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
                  <div className="solution_card"  data-aos="fade-up-left">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
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
                  <div className="solution_card"  data-aos="fade-up-left">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8833/8833005.png"
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