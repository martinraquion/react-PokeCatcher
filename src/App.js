import React, {Component} from 'react';
import './App.css';

import PokeHeader from './components/PokeHeader'
import SelectLocation from './components/SelectLocation'
import Encounter from './components/Encounter'
import CapturedBox from './components/CapturedBox'

import { pokeApi } from './config/axiosConfig'

class App extends Component {
  constructor(){
    super();
    this.state = {
      regions: [],
      locations: [],
      areas: []
    }
  }

  componentDidMount(){
    pokeApi
      .get('region')
      .then(res => {
        this.setState({
          regions: res.data.results
        })
      })
    

    }

  render(){
  return (
    <div className="App">
      <PokeHeader />
      <div className="main-content">
      <div className="main-wrapper">
      <div className="container-sm">
      <SelectLocation 
      regions={this.state.regions} 
      locations={this.state.locations} 
      areas={this.state.areas}/>
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
