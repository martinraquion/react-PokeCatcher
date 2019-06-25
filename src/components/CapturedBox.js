import React from 'react'

import CapturedPoke from './Captured/CapturedPoke'


export default function CapturedBox({capturepoke}){
    console.log(capturepoke)

    // if(capturepoke.length!==0){
    //     var name = capturepoke[0].name
    // }
    
    return(
      <div className="my-poke">
              <div className="box-title b-blue">
                  <span>CAPTURED</span>&nbsp;&nbsp;
                  <span className="cap-countered">0/6</span>
              </div>
              <div className="captured-box">
              <CapturedPoke />
              </div>
              </div>
    )
    
}