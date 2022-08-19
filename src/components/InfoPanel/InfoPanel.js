import React from 'react';
import "./InfoPanel.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

function InfoPanel({selectedVideo}) {

    function formatDate(date) {
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = ( "0" + (formattedDate.getMonth() + 1)).slice(-2);
        const day = ( "0" + formattedDate.getDate()).slice(-2);
        return `${month}/${day}/${year}`;
    }

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
                    <img className='info-panel__icon' src={viewsIcon}/>
                    {selectedVideo.views}
                </p>
                <p className='info-panel__card info-panel__likes'>
                    <img className='info-panel__icon' src={likesIcon}/>
                    {selectedVideo.likes}
                </p>
            </div>
        </div>
    )
}

export default InfoPanel;