import VideoHero from '../VideoHero/VideoHero';
import React, { useState } from 'react';
import videoData from "../../data/video-details.json";
import videos from "../../data/videos.json";
import VideoInfo from '../VideoInfo/VideoInfo';
import CommentsSection from '../CommentsSection/CommentsSection';
import VideoList from '../VideoList/VideoList';
import "./MainInfoContainer.scss";

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
        <main>
            <VideoHero 
                selectedVideo={selectedVideo}
            />
            <div className="content">
                <div className="content__left">
                    <VideoInfo 
                        selectedVideo={selectedVideo}
                    />
                    <CommentsSection 
                        selectedVideo={selectedVideo}
                    />
                </div>
                <VideoList 
                    nonSelectedVideos={nonSelectedVideos}
                    handleClick={handleClick}
                />
            </div>
        </main>
    )
}

export default MainInfoContainer;