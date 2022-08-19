import "./VideoHero.scss";
import React from 'react'

function VideoHero({selectedVideo}) {
  return (
    <div className="hero">
        <video className="hero__video" controls poster={selectedVideo.image}>
        <source src="{selectedVideo.video}" type="video/mp4"/>
        <source src="movie.ogg" type="video/ogg"/>
        </video>
    </div>
   
  )
}

export default VideoHero