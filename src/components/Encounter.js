import React, {Component} from 'react'

import ExploreMore from './Encounter/ExploreMore'
import Founded from './Encounter/Founded'

export default class Captured extends Component{
    render(){
    return(
      <div className="poke-info">
      <div className="box-title b-gold">
          <span>ENCOUNTER </span>
      </div>
      
    <Founded />
    <ExploreMore />
  
     
  </div>
    )
    }
  }