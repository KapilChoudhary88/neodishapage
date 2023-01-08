import React from "react";

function Feature() {
  return (
    <div>
      <div className="pagesection wf-section">
        <div className="pagecontainer">
          <div className="featuresummary">
            <div className="featuresummary-column featuresummary-personaimage">
              <img
                src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a05b1ce09edcc052e_home_designer.png"
                width="550"
                alt="Illustration of designer working on designs"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 42vw, 44vw"
                srcset="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a05b1ce09edcc052e_home_designer-p-1080.png 1080w, https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b44330a05b1ce09edcc052e_home_designer.png 1100w"
                className="personaillustration"
              />
            </div>
            <div className="featuresummary-column">
              <div className="featuresummary-text">
                <div className="pre-header"
                // style={{fontSize :"50px"}}
                >Effortless validation for</div>
                <h3 className="heading h3 personaheading">Design professionals</h3>
                <div className="text personasubhead">
                  Test interfaces, interaction flows, iconography and more, to
                  help you create intuitive and delightful experiences for your
                  users.
                </div>
              </div>
              <div className="testimonial">
                <img
                  src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b48038d33b04e2c4746784b_logo_chartmogul.png"
                  alt="ChartMogul logo"
                  className="testimonial-logo"
                />
                <div className="testimonial-text">
                  The navigation test is god's gift to UI designers, it probably
                  has the best power-to-simplicity ratio of any software, ever.
                </div>
                <div className="person">
                  <img
                    src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5b47fffe8d2f84bbe2f2d3c9_avatar_nick.png"
                    alt="Nick Franklin"
                    className="person-image"
                  />
                  <div className="person-name-title">
                    <div className="person-name">Nick Franklin</div>
                    <div className="person-title">Chief Executive Officer</div>
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

export default Feature;
