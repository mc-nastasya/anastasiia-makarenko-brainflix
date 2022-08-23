import "./PublishVideo.scss";
import VideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";

function PublishVideo() {
  return (
    <div className="publish-video">
        <h1 className="publish-video__title">Upload Video</h1>
        <form className="publish-video__form form">
            <div className="form__top">
                <div className="form__image-container">
                    <p className="form__image-title">Video thumbnail</p>
                    <img className="form__image" src={VideoThumbnail} alt=""/>
                </div>
                <div className="form__input-container">
                    <label className="form__label" htmlFor="video-title">Title your video</label>
                    <textarea id="video-title" className="form__input-title" name="video-title" placeholder="Add a title to your video"></textarea>
                    <label className="form__label" htmlFor="video-description">Add a video description</label>
                    <textarea id="video-description" className="form__input-description" name="video-description" placeholder="Add a description to your video"></textarea>
                </div>
            </div>
            <div className="form__bottom">
                <button className="form__publish-button button" type="submit" value="submit">Publish</button>
                <button className="form__cancel-button button" type="cancel" >Cancel</button>
            </div>

        </form>
    </div>
  )
}
export default PublishVideo;