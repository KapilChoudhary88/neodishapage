import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/shelf monitoring.png';
import Cards from './Components/Cards';
import Style from './Components/Style';
import './App.css';
import { NewFeature } from './Components/NewFeature';
import HowitWork from './Components/HowitWork';
import Neometry from './Components/Neometry';
import Slider from './Components/Slider'
import FeaturedBox from './Components/FeaturedBox';
import Second_Monitor from './Components/Second_Monitor';



function App() {
  return (
    <div class="App">
      <Header />
      <Feature />
      <HowitWork/>
      <Second_Monitor/>
      <NewFeature></NewFeature>
      <FeaturedBox/>
      

      {/* <Style/> */}
      {/* <Slider/> */}
      {/* <Neometry/>  */}
     {/* <div class="test">
        <About image={aboutimage} title="Store Auditing" button="More" />
        <About image={aboutimage1} title="Self Monitoring" button="More" />
      </div>  */}
      {/* <Cards /> */}


    </div>
  );
}

export default App;
