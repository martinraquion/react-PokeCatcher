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
      loading: true,
      pokemon: [],
      capturedPokemon: [],
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
               areas: []
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
      .then(res => {
        axios.get(this.state.areas[0].url)
              .then(res => {
                this.setState({
                  possibleEncounters: res.data.pokemon_encounters,
                  // CatchedPoke: this.state.possibleEncounters[Math.floor(Math.random()*3)].pokemon.name
                })
              })
      })

    }
    // else if(url.includes('location-area')){
    //   console.log('hi')
    // }
  }
  
  handleAreaChange = (url) =>{
    axios.get(url)
          .then(res => {
            this.setState({
              possibleEncounters: res.data.pokemon_encounters,
              // CatchedPoke: this.state.possibleEncounters[0].pokemon.name
            })
          })
        }

  getPokemon = (pokemon) =>{
  return (
    pokeApi.get(`pokemon/${pokemon}`)
          .then(res=>{
            this.setState({
            pokemon: res.data
            })
            // console.log(this.state.pokemon)   
            })
          )
        }

        capturedPoke = (cap) => {
          var pokedex = this.state.capturedPokemon.concat(cap);
          var len = this.state.capturedPokemon.length;
          console.log(pokedex)
          if (len !==6 ) {
            return(
              this.setState({
                capturedPokemon: pokedex
              })
            )
          }
          
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
      // pokemon = {this.state.CatchedPoke}
      randomPoke={this.getPokemon}
      />
      
      <Encounter pokemondata = {this.state.pokemon} myPoke={this.capturedPoke}/>
      </div> 
      <div className="container-lg">
      <CapturedBox capturedpoke = {this.state.capturedPokemon}/>
      </div>
      </div>
      </div>
    </div>
  );
  }
}

export default App;
