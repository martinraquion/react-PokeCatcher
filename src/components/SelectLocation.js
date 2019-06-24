import React, {Component} from 'react'


export default class SelectLocation extends Component{
    render(){
    return(
      <div className="form-container">
      <div className="form-wrap">
          <label for="region-inp" className="select-label">REGION: </label>
          <select name="region" id="region-inp" className="select-inp"> 
          </select> 
          <label for="loc-inp" className="select-label">LOCATION: </label>
          <select name="region" id="loc-inp" className="select-inp">
          </select>
          <label for="area-inp" className="select-label area-label"> AREA: </label>
          <select name="region" id="area-inp" className="select-inp">
          </select>
      </div>
      <div className="btn-wrap" id="btn-wrap">
          <button value="EXPLORE" className="explore-btn" id="explore-btn" disabled>EXPLORE</button>
      </div>
    </div>
    )
    }
  }