import React from 'react';
import './App.css';
import Header from './Neodisha/Header';
import Feature from './Neodisha/Feature';
import { NewFeature } from './Neodisha/NewFeature';
import HowitWork from './Neodisha/HowitWork';
import FeaturedBox from './Neodisha/FeaturedBox';
import SecondMonitor from './Neodisha/SecondMonitor';


function App() {
  return (
    <div class="App">
      <Header />
      <Feature />
      <SecondMonitor/>
      <NewFeature></NewFeature>
      <HowitWork/>
      <FeaturedBox/>
      
    </div>
  );
}

export default App;
