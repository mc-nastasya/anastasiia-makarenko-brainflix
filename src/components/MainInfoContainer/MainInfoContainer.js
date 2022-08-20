import VideoHero from '../VideoHero/VideoHero';
import React, { useState } from 'react';
import videoData from "../../data/video-details.json";
import videos from "../../data/videos.json";
import VideoInfo from '../VideoInfo/VideoInfo';
import CommentsSection from '../CommentsSection/CommentsSection';
import VideoList from '../VideoList/VideoList';

function MainInfoContainer() {
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    const nonSelectedVideos = videos.filter((video)=>{
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
                selectedVideo={selectedVideo}
            />
            <CommentsSection 
                selectedVideo={selectedVideo}
            />
            <VideoList 
                nonSelectedVideos={nonSelectedVideos}
                handleClick={handleClick}
            />
        </>
    )
}

export default MainInfoContainer;