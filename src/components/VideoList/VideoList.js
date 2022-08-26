import { Link } from "react-router-dom";
import "./VideoList.scss";

function VideoList({nonSelectedVideos}) {
    return (
        <div className="video-list">
            <p className="video-list__title">Next videos</p>
            {nonSelectedVideos.map((video)=>{
                return(
                    <Link to={`/videos/${video.id}`} key={video.id}> 
                    <div  className="video-list__item item">
                        <img src={video.image} alt={video.title} className="item__image" />
                        <div className="item__right">
                            <p className="item__title">{video.title}</p>
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

export default VideoList