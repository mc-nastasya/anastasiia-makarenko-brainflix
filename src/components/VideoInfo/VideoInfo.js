import React from 'react';
import "./VideoInfo.scss";

function VideoInfo({title}) {
  return (
    <div className='info'>
        <h1 className='info__title'>{title}</h1>
    </div>
    
  )
}

export default VideoInfo