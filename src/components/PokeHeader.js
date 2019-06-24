import React from 'react'
import logo from '../logo.png'

export default function PokeHeader(){
    return(
      <div className="header">
      <span className="icon">
          <img src={logo} alt="" />
      </span>
      </div>
    )
  }