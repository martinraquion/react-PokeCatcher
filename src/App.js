import React, {Component} from 'react';
import './App.css';

import PokeHeader from './components/PokeHeader'
import SelectLocation from './components/SelectLocation'
import Encounter from './components/Encounter'
import CapturedBox from './components/CapturedBox'

import { pokeApi } from './config/axiosConfig'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      regions: [],
      locations: [],
      areas: [],
      possibleEncounters: [],
      loading: true
    }
  }

  componentDidMount(){  
    pokeApi
      .get('region')
      .then(res => {
        return {
          regions: res.data.results,
        }
      })
      .then(customRes => {
        return pokeApi.get(`region/${customRes.regions[0].name}`)
        .then(res => {
          customRes.locations = res.data.locations
          return customRes
        })
        .then(customRes => {
          return pokeApi.get(`location/${customRes.locations[0].name}`)
            .then(res=>{
                // console.log(customRes)
              customRes.areas = res.data.areas
              return customRes
            })
        
        })
      .then(customRes => {
        return pokeApi.get(`location-area/${customRes.areas[0].name}`)
        .then(res => {
          // console.log(res)
          customRes.possibleEncounters = res.data.pokemon_encounters;
          return customRes;
        })
      })
      .then(customRes => {
        // console.log(customRes)
        this.setState({
          regions: customRes.regions,
          locations: customRes.locations,
          areas: customRes.areas,
          possibleEncounters: customRes.possibleEncounters,
          loading: false
        })
      })
      })
    }
  

  handleLocationChange = (url) => {
    if(url.includes('region')){
      axios.get(url)
            .then(res => {
             this.setState({
               locations: res.data.locations,
             })
            })
            .then(res2 => console.log(res2))            
            
    }

    else if(url.includes('location')){
      axios.get(url)
      .then(res => {
       this.setState({
         areas: res.data.areas
        //  possibleEncounters: res.data.
       })
      })
    }
    // else if(url.includes('location-area')){
    //   console.log('hi')
    // }
  }

  handleAreaChange = (url) =>{
    axios.get(url)
          .then(res => 
            {
            this.setState({
              possibleEncounters: res.data.pokemon_encounters
            })
          }
          )
          
  }

 
  render(){
  return (
    <div className="App">
      <PokeHeader />
      <div className="main-content">
      <div className="main-wrapper">
      <div className="container-sm">
      <SelectLocation 
      loading = {this.state.loading}
      regions={this.state.regions} 
      locations={this.state.locations} 
      areas={this.state.areas}
      changeLocation = {this.handleLocationChange}
      changeArea = {this.handleAreaChange}
      getPokemon = {this.state.possibleEncounters}
      />
      
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
