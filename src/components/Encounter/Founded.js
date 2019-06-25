import React from 'react'

// console.log(this.state.areas)

export default function Founded({pokemondataAll}){
        
        console.log(pokemondataAll.name)
        return(
            <div className="found-cont" >
            <div className="details-cont">
                    <span className="founded-text" style={{'marginTop': '20px'}}>You've founded: </span>
                   
                    <div className="img-name">
                    <img src='' alt="" width="200px" height="200px" id="poke-image" />
                    </div>
                     <span className="founded-text" id="founded-text">{pokemondataAll.name}</span>
                    <button className="catch-btn" id="catch-btn">Catch</button>
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
                         <p id="speed"></p><br />
                         <p id = "sp-defense">50</p><br />
                         <p id = "sp-attack">50</p><br />
                         <p id = "defense">20</p><br />
                         <p id= "attack">50</p><br />
                         <p id="hp">20</p>
                    </div>    
                </div>
            
                
            </div>
        
        </div>
        )
    }
