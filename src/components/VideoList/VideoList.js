import { Link } from "react-router-dom";
import "./VideoList.scss";
import {useState, useEffect} from 'react';

function VideoList({nonSelectedVideos}) {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const cutTitle = (string) =>{
        if(string.length < 41) {
            return string;
        }
        let result = "";
        const newString = string.slice(0, 40);
        if (string[39] === " " || string[40] === " ") {
            result = newString;
        } else {
        result = newString.slice(0, newString.lastIndexOf(" "));
        }
        return result + "...";
    }


    return (
        <div className="video-list">
            <p className="video-list__title">Next videos</p>
            {nonSelectedVideos.map((video)=>{
                return(
                    <Link className="item__link" to={`/videos/${video.id}`} key={video.id}> 
                    <div  className="video-list__item item">
                        <img src={video.image} alt={video.title} className="item__image" />
                        <div className="item__right">
                            <p className="item__title">{width< 768 ? cutTitle(video.title): video.title}</p>
                            <p className="item__channel">{video.channel}</p>
                        </div>
                    </div>
                    </Link>
                )
            })
            }
        </div>
    )
}

export default VideoList;
