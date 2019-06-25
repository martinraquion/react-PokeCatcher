import React from 'react'

import ExploreMore from './Encounter/ExploreMore'



// function Catch (){
//   return(
//     <button 
//     className="catch-btn" 
//     id="catch-btn"
//     onClick={()=>{
//       document.getElementById('found-cont').classList.add('hide')
//       document.getElementById('found-cont-captured').classList.remove('hide')
//     }}
//     >Catch</button>
//   )
// }

function CaptureBtn({pokemondata, myPokemon}) {
  return(
    <button 
    className="catch-btn" 
    id="catch-btn"
    onClick={()=>{
        //console.log(pokeFound)
      myPokemon(pokemondata)
      document.getElementById('found-cont').classList.add('hide')
      document.getElementById('found-cont-captured').classList.remove('hide')
    }}
    >Catch</button>
  )
}

export default function Encounter({pokemondata, myPoke}){

if(pokemondata.length!==0){
   var name = pokemondata.name;
   var image = pokemondata.sprites.front_default;
   var hp = pokemondata.stats[5].base_stat;
   var defense = pokemondata.stats[3].base_stat;
   var attack = pokemondata.stats[4].base_stat;
   var speed = pokemondata.stats[0].base_stat;
   var spDef = pokemondata.stats[1].base_stat;
   var spAttk = pokemondata.stats[2].base_stat;

}
    return(
      <div className="poke-info">
      <div className="box-title b-gold">
          <span>Encounter</span>
      </div>
      
      <div className="found-cont hide" id="found-cont" >
            <div className="details-cont">
                    <span className="founded-text" style={{'marginTop': '20px'}}>You've founded: </span>
                    
                    <div className="img-name">
                    <img src={image} alt="" width="200px" height="200px" id="poke-image" />
                    </div>
                     <span className="founded-text" id="founded-text">{name}</span>
                     <CaptureBtn pokemondata={pokemondata} myPokemon={myPoke}/>
            </div>
            
            <div className="image-name-cont">
            <div className="details">
                    <div className="stat-name">
                       <p>SPEED: </p><br />
                       <p>SPECIAL DEFENSE:</p><br />
                       <p>SPECIAL ATTACK:</p><br />
                       <p>DEFENSE:</p><br />
                       <p>ATTACK:</p><br />
                       <p>HP:</p>
                    </div>
                    <div className="stat-num">
                         <p id="speed">{speed}</p><br />
                         <p id = "sp-defense">{spDef}</p><br />
                         <p id = "sp-attack">{spAttk}</p><br />
                         <p id = "defense">{defense}</p><br />
                         <p id= "attack">{attack}</p><br />
                         <p id="hp">{hp}</p>
                    </div>    
                </div>
            
                
            </div>
        
        </div>
    <ExploreMore exploreName={pokemondata.name}/>
  
     
  </div>
    )
    
  }