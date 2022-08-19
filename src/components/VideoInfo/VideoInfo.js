import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';
import "./VideoInfo.scss";

function VideoInfo({selectedVideo }) {
  return (
    <div className='info'>
        <h1 className='info__title'>{selectedVideo.title}</h1>
        <InfoPanel 
            selectedVideo = {selectedVideo}
        />
        <p className='info__description'>{selectedVideo.description}</p>
    </div>
    
  )
}

export default VideoInfo