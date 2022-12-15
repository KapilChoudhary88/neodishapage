import React from "react";
import "./Neometry.css";
import Carousel from "react-elastic-carousel";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/th1.jpg";
import featureimage1 from "../images/brand.png";
import featureimage2 from "../images/th1.jpg";
import Item from "./Item";


function Neometry() {
  return (
    <>
    
    <div className="nm">
       <h1 className='wwd' >Feature Box</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam.
      </p>
      
      <div className="its">
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
</div>
    </>
  );
}

export default Neometry;
