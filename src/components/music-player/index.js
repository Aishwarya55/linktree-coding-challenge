import React, { Component } from 'react'

class MusicPlayer extends Component{


    render(){
        const {src, cover, songName, artistName} = this.props
        return <div className="musicPlayer">
            <img alt="cover" src={cover} height="65" width="65"></img>
            <div className="songName">
            <span>{songName}-{artistName}</span>
        <audio
            controlsList="nodownload"
                controls
                src={src}>
                Your browser does not support the
            <code>audio</code> element.
            </audio>
            </div>
       
        </div>
    }
}

export default MusicPlayer
