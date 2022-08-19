import VideoHero from '../VideoHero/VideoHero';
import React, { useState } from 'react';
import videoData from "../../data/video-details.json";
import VideoInfo from '../VideoInfo/VideoInfo';

function MainInfoContainer() {
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    const nonSelectedVideos = videoData.filter((video)=>{
        return video.id !== selectedVideo.id
    })

    const handleClick = (videoId)=>{
        const newSelectedVideo = videoData.find((video)=>{
            return videoId === video.id
        })
        setSelectedVideo(newSelectedVideo);
    }

    return (
        <>
            <VideoHero 
                selectedVideo={selectedVideo}
            />
            <VideoInfo 
                title={selectedVideo.title}
            />
        </>
    )
}

export default MainInfoContainer;