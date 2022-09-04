import "./PublishVideo.scss";
import VideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


function PublishVideo({setIsSubmitted}) {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(false);
    const [titleValue, setTitleValue] = useState(false);
    const [descriptionValue, setDescriptionValue] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrorMessage(false);
        setDescriptionValue(false);
        setTitleValue(false);

        const title = event.target.title.value;
        const description = event.target.description.value

        if(!title){
            setTitleValue(true);
        }

        if(!description){
            setDescriptionValue(true);
        }
        setErrorMessage(true);


        axios.post(process.env.REACT_APP_API_URL + "/videos", {
            title: title,
            description: description 
        }).then(()=>{
            setIsSubmitted(true);
            event.target.title.value = "";
            event.target.description.value = "";
            navigate('/');
        })
        
    }


    return (
        <div className="publish-video">
            <h1 className="publish-video__title">Upload Video</h1>
            <form onSubmit={handleSubmit} className="publish-video__form form">
                <div className="form__top">
                    <div className="form__image-container">
                        <p className="form__image-title">Video thumbnail</p>
                        <img className="form__image" src={VideoThumbnail} alt=""/>
                    </div>
                    <div className="form__input-container">
                        <label className="form__label" htmlFor="video-title">Title your video</label>
                        <textarea id="video-title" className={`form__input-title ${(errorMessage && titleValue) ? "form__input-invalid" : null}`} name="title" placeholder="Add a title to your video"></textarea>
                        <label className="form__label" htmlFor="video-description">Add a video description</label>
                        <textarea id="video-description" className={`form__input-description ${(errorMessage && descriptionValue) ? "form__input-invalid" : null}`} name="description" placeholder="Add a description to your video"></textarea>
                        <div>
                            {errorMessage && <p className="form__error">*Please fill all the fields</p>}
                        </div>
                    </div>
                    
                </div>
                {<div className="form__bottom">
                    <ButtonComponent addClass="form__publish-button" buttonContent="Publish"/>
                    <Link to="/"><ButtonComponent addClass="form__cancel-button" buttonContent="Cancel"/></Link>
                </div>}
            </form>
        </div>
      )
    }
    export default PublishVideo;