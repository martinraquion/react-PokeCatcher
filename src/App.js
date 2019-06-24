import React, {Component} from 'react';
import './App.css';


import PokeHeader from './components/PokeHeader'
import SelectLocation from './components/SelectLocation'
import Encounter from './components/Encounter'
import CapturedBox from './components/CapturedBox'



class App extends Component {
  render(){
  return (
    <div className="App">
      <PokeHeader />
      <div className="main-content">
      <div className="main-wrapper">
      <div className="container-sm">
      <SelectLocation />
      <Encounter />
      </div> 
      <div className="container-lg">
      <CapturedBox />
      </div>
      </div>
      </div>
    </div>
  );
  }
}

export default App;
