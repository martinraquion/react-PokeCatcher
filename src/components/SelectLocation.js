import React from 'react';


function PokeSelector({items}){
  return(
    <select disabled={!items.length} className="select-inp"> 
    {items.map(item=>(
      <option key={item.url} value={item.name}>{item.name}</option>
    ))}
    </select> 
  )
}



export default function SelectLocation({regions = [], locations = [], areas=[]}){
    
    return(
      <div className="form-container">
      <div className="form-wrap">
          <label className="select-label">REGION: </label>
          <PokeSelector items={regions}/>
          <label className="select-label">LOCATION: </label>
          <PokeSelector items={locations}/>
          <label className="select-label area-label"> AREA: </label>
          <PokeSelector items={areas}/>
      </div>
      <div className="btn-wrap" id="btn-wrap">
          <button value="EXPLORE" className="explore-btn" id="explore-btn" disabled>EXPLORE</button>
      </div>
    </div>
    )
    
  }