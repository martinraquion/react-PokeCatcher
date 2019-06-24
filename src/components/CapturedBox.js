import React, {Component} from 'react'

import CapturedPoke from './Captured/CapturedPoke'


export default class CapturedBox extends Component{
    render(){
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
}