import VideoHero from '../VideoHero/VideoHero';
import React, { useEffect, useState } from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import CommentsSection from '../CommentsSection/CommentsSection';
import VideoList from '../VideoList/VideoList';
import "./MainInfoContainer.scss";
import {getVideos, getSingleVideo, scrollToTop} from "../../utilities/utilities";
import { useParams } from 'react-router-dom';

function MainInfoContainer() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos]  = useState([]);

    const {videoId} = useParams();

    useEffect(()=>{
        scrollToTop();
        getVideos().then((response)=>{
            setVideos(response.data);
            const selectedVideoId = (videoId || response.data[0].id);
            return getSingleVideo(selectedVideoId);
        }).then((response)=>{
            setSelectedVideo(response.data)
        }).catch((error)=>{
            console.log("error", error)
        })
    }, [videoId]);


    if(!selectedVideo) {
        return <p>...Loadiing</p>
    }

    const nonSelectedVideos = videos.filter((video)=>{
        return video.id !== selectedVideo.id;
    })
    
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
                <div className='content__right'>
                    <VideoList 
                        nonSelectedVideos={nonSelectedVideos}
                    />
                </div>
            </div>
        </main>
    )
}

export default MainInfoContainer;