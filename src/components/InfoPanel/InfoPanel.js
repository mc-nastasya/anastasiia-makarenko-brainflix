import React from 'react';
import "./InfoPanel.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import {formatDate} from "../../utilities/utilities";

function InfoPanel({selectedVideo}) {


  return (
        <div className='info-panel'>
            <div className='info-panel__left'>
                <p className='info-panel__card info-panel__channel'>
                    {"By " + selectedVideo.channel}
                </p>
                <p className='info-panel__card info-panel__date'>
                    {formatDate(selectedVideo.timestamp)}
                </p>
            </div>
            <div className='info-panel__right'>
                <p className='info-panel__card info-panel__views'>
                    <img className='info-panel__icon' alt="" src={viewsIcon}/>
                    {selectedVideo.views}
                </p>
                <p className='info-panel__card info-panel__likes'>
                    <img className='info-panel__icon' alt="" src={likesIcon}/>
                    {selectedVideo.likes}
                </p>
            </div>
        </div>
    )
}

export default InfoPanel;