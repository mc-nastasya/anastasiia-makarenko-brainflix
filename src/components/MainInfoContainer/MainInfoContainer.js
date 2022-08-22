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
            window.scrollTo( 0, 0);
            return videoId === video.id;
        })
        setSelectedVideo(newSelectedVideo);
    }

    function formatDate(date) {
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = ( "0" + (formattedDate.getMonth() + 1)).slice(-2);
        const day = ( "0" + formattedDate.getDate()).slice(-2);
        return `${month}/${day}/${year}`;
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
                        formatDate={formatDate}
                    />
                    <CommentsSection 
                        selectedVideo={selectedVideo}
                        formatDate={formatDate}
                    />
                </div>
                <div className='content__right'>
                    <VideoList 
                        nonSelectedVideos={nonSelectedVideos}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </main>
    )
}

export default MainInfoContainer;