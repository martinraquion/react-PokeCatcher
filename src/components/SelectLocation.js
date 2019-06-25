import React from 'react';


function PokeSelector({handleChange, items}){
  return(
    <select onChange={e => handleChange(e.target.value)} disabled={!items.length} className="select-inp"> 
    {items.map(item=>(
      <option key={item.url} value={item.url}>{item.name}</option>
    ))}
    </select> 
  )
}





export default function SelectLocation({
  loading,
  regions = [],
  locations = [],
  areas=[], 
  getPokemon = [],
  changeLocation,
  changeArea
  }){
    
    function handleExplore(){
      let random = Math.floor(Math.random()*getPokemon.length)
      console.log(getPokemon[random].pokemon.name)
    }

    return(
      <div className="form-container">
      <div className="form-wrap">
          {loading ? 'Loading...':
          <React.Fragment>
          <label className="select-label">REGION: </label>
          <PokeSelector items={regions} handleChange={changeLocation}/>
          <label className="select-label">LOCATION: </label>
          <PokeSelector items={locations} handleChange={changeLocation}/>
          <label className="select-label area-label"> AREA: </label>
          <PokeSelector items={areas} handleChange={changeArea}/>
          </React.Fragment>
          }
      </div>
      <div className="btn-wrap" id="btn-wrap">
          <button 
          value="EXPLORE" 
          className="explore-btn" 
          id="explore-btn" 
          disabled={!areas.length}
          onClick={handleExplore}>
          EXPLORE
          </button>
      </div>
    </div>
    )
    
  }