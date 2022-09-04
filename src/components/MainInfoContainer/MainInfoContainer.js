import VideoHero from '../VideoHero/VideoHero';
import React, { useEffect, useState } from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import CommentsSection from '../CommentsSection/CommentsSection';
import VideoList from '../VideoList/VideoList';
import "./MainInfoContainer.scss";
import {getVideos, getSingleVideo, scrollToTop} from "../../utilities/utilities";
import { useParams, useNavigate } from 'react-router-dom';
import FormSubmitted from '../FormSubmitted/FormSubmitted';


function MainInfoContainer({isSubmitted, setIsSubmitted}) {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos]  = useState([]);
    const navigate = useNavigate();

    const {videoId} = useParams();

    useEffect(()=>{
        getVideos().then((response)=>{
            setVideos(response.data);
            const selectedVideoId = (videoId || response.data[0].id);
            return getSingleVideo(selectedVideoId);
        }).then((response)=>{
            setSelectedVideo(response.data);
            scrollToTop();
        }).catch((error)=>{
            console.log(error);
            navigate('/*');
        })
    }, [videoId]);


    if(!selectedVideo) {
        return <p className='content__loading'>...Loadiing</p>
    }

    const nonSelectedVideos = videos.filter((video)=>{
        return video.id !== selectedVideo.id;
    })
    
    return (
        <main>
            {isSubmitted ? <FormSubmitted setIsSubmitted={setIsSubmitted} /> : null}
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