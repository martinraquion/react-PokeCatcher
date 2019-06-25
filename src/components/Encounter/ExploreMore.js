import React, {Component} from 'react'

export default class ExploreMore extends Component{
    render(){
    return(
    <div className="found-cont-captured hide">
    <div className="capture-prompt">
                <span className="capture-text">You've Captured Squirtle</span> 
                <br /><span className='capture-subtext'>click <span className="text-red">explore</span> to find more</span>
    </div>
    </div>
    )
    }
}