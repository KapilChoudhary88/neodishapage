import React from "react";
import "./Style.css";
import "flip-card-wc";

const FrontOfCard = ({ children }) => (
  <div
    className="card"
    style={{
      // backgroundColor: "linear-gradient(45deg, #f6f8fa, #f6f8fa)",
      // height: "100%",
    }}
  >
    <p>{children}</p>
  </div>
);

const BackOfCard = ({ children }) => (
  <div
    className="card"
    style={{
      // backgroundColor: "linear-gradient(85deg, #f5f9f2, #f5f9f2)",
      // height: "100%",
    }}
  >
    <p>{children}</p>
  </div>
);

const FlipCard = ({ variant = "hover", frontOfCard, backOfCard }) => {
  return (
    <flip-card variant={variant} style={{ height: "100%", width: "100%" }}>
      <div slot="front">{frontOfCard}</div>
      <div slot="back">{backOfCard}</div>
    </flip-card>
  );
};

const Cards = () => {
  return (
    <div className="textt">
      <h3 style={{ "fontSize": "35px" , "top":"50px" , "fontWeight":"bolder"}}>Store Analysis</h3>
      
      <div className="flip-card-inner">
        
        <p className="outside_text">  <strong>Store Monitoring...
        <br/>
</strong>
<br/>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
          Atque praesentium natus eum sit amet, consectetur adipisicing elit. Atque praesentium 
         natu r sit amet, consectetur adipisicing elit.                       
        Atque praesentium natu
        </p>
        <FlipCard
          frontOfCard={
            <FrontOfCard>
              <div className="flip-card-front">
                <img src="https://cdn-icons-png.flaticon.com/128/8313/8313122.png" 
                style={{"margin": "1px", "padding": "5px" , "height": "200px" , "width": "210px"}}/>{" "}
                
                <h3 className="bring">Bring your cursor here
                either with meaningful text, or an empty string for
                Lo</h3>

              </div>
            </FrontOfCard>
          }
          backOfCard={
            <BackOfCard>
              <div className="flip-card-back">
                <h3>Store Auditing</h3>
                <p className="para1">
                  Store audit reports are automatically generated in real-time
                  by the brain (AI/ML engine) of DIShA. These comprehensive
                  reports are displayed on the web-app and periodically mailed
                  to the configured recipients.
                </p>  
              </div>
            </BackOfCard>
          }
        />
        <FlipCard
          frontOfCard={
            <FrontOfCard>
              <div className="flip-card-front">
                <img src="https://cdn-icons-png.flaticon.com/128/2600/2600399.png" 
                style={{"margin": "1px", "padding": "5px" , "height": "200px" , "width": "210px"}}/>{" "}
                <h5 style={{"marginTop": "69px","fontSize":"25px"}}>Store Monitoring</h5>
              </div>
            </FrontOfCard>
          }
          backOfCard={
            <BackOfCard>
              <div className="flip-card-back">
                <h3>Store Monitoring</h3>
                <p className="paraa">
                  In-store shelves are continuously monitored through the eyes
                  (Surveillance cameras / mobile application) of DIShA. This
                  continuos stream of data is pushed to the brain for further
                  processing. —- As it is intelligently said, "Shelf is full!
                  Sale is high!" Thus, DIShA continuosly analyses the fullness
                  of all the monitored shelves. In detail, it tags the bins
                  inside a shelf as empty or filled and thus derive an aggregate
                  fullness value from such tags..3
                  6+336.02.36.

                </p>
              </div>
            </BackOfCard>
          }
        />
      </div>
    </div>
  );
};

export default Cards;
