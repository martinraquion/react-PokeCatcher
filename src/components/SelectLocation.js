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
 
function Explore({ pokemons, getRandPokemon}) {
  return(
    <button 
    value="EXPLORE" 
    className="explore-btn" 
    id="explore-btn" 
    onClick={()=>{
      var length = pokemons.length
      var randNumber = Math.floor(Math.random() * length);
      var randPokemons = pokemons[randNumber];
      getRandPokemon(randPokemons.pokemon.name)
      document.getElementById('found-cont').classList.remove('hide')
      document.getElementById('found-cont-captured').classList.add('hide')
    }}
    >
    EXPLORE
    </button>
  )
}


export default function SelectLocation({
  loading,
  regions = [],
  locations = [],
  areas=[], 
  getPokemon = [],
  changeLocation,
  changeArea,
  randomPoke
  
  }){
    
    // function handleExplore(){
    //   let random = Math.floor(Math.random()*getPokemon.length)
    //   let PokeName = getPokemon[random].pokemon.name
    //   console.log(PokeName)
    //   // console.log(pokemon)
    // }

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
      <Explore pokemons={getPokemon} getRandPokemon={randomPoke}/>
      </div>
    </div>
    )
    
  }