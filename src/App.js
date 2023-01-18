import React from 'react';
import './App.css';
import Header from './Components/Header';
import Feature from './Components/Feature';
import { NewFeature } from './Components/NewFeature';
import HowitWork from './Components/HowitWork';
import FeaturedBox from './Components/FeaturedBox';
import Second_Monitor from './Components/Second_Monitor';



function App() {
  return (
    <div class="App">
      <Header />
      <Feature />
      <Second_Monitor/>
      <NewFeature></NewFeature>
      <HowitWork/>
      <FeaturedBox/>
      
    </div>
  );
}

export default App;
