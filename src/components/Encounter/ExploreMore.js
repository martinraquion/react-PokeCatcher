import React from 'react'

export default function ExploreMore ({exploreName}){
    
    return(
    <div className="found-cont-captured hide" id='found-cont-captured'>
    <div className="capture-prompt">
                <span className="capture-text">You've Captured {exploreName}</span> 
                <br /><span className='capture-subtext'>click <span className="text-red">explore</span> to find more</span>
    </div>
    </div>
    )
    
}