import React from 'react'
import FeatureBox from'./FeatureBox';
import featureimage from '../images/th1.jpg';
import featureimage1 from '../images/brand.png';
import featureimage2 from '../images/th1.jpg';

function Feature() {
  return (
    <div id ='features'>
      <h1 className='wwd'>Feature Box</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quibusdam.</p>
      

        <div className='a-container'>
           
            <FeatureBox image = {featureimage} title = "Missing Product"/>
            <FeatureBox image = {featureimage1} title = "Brands Blocks"/>
            <FeatureBox image = {featureimage2} title = "Bar Code"/>
            <FeatureBox image = {featureimage} title = "Missing Product"/>
            {/* <FeatureBox image = {featureimage1} title = "Brands Blocks"/>
            <FeatureBox image = {featureimage2} title = "Bar Code"/> */}
        </div>

    </div>
  )
}

export default Feature