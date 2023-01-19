import React from 'react';
import './App.css';
import Header from './Neodisha/Header';
import Feature from './Neodisha/Feature';
import { NewFeature } from './Neodisha/NewFeature';
import HowitWork from './Neodisha/HowitWork';
import FeaturedBox from './Neodisha/FeaturedBox';
import Second_Monitor from './Neodisha/Second_Monitor';



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
