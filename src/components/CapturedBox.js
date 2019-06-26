import React from 'react'

// import CapturedPoke from './Captured/CapturedPoke'


export default function CapturedBox({capturedpoke}){
    
    

    if(capturedpoke.length!==0){
    // console.log(capturedpoke[0].name)
    var counter = 0;    
    counter = capturedpoke.length
    }
    // if(capturepoke.length!==0){ 
    //     var name = capturepoke[0].name
    // }

    return(
      <div className="my-poke">
              <div className="box-title b-blue">
                  <span>CAPTURED</span>&nbsp;&nbsp;
                  <span className="cap-countered"> 
                    {counter? counter:0}/6
                  </span>
              </div>
              <div className="captured-box">
              {(capturedpoke.length!==0)?
              capturedpoke.map((pokename, index) => {
              return(
              <React.Fragment key={index}>
              <div className="captured-poke" >
              <img src={pokename.sprites.front_default} alt="" width="200px" height="200px" className="img-captured" />
              <span className="founded-text" id="founded-text">{pokename.name}</span>
              </div> 
              </React.Fragment>
              )})
            
              :''}
              </div>
              </div>
    )
    
}