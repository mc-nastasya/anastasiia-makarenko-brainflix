import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import "./AddComment.scss";

function AddComment() {
  const handleSubmit = (event)=>{
    event.preventDefault();
  }

  return (
    <div className="comments__add">
        <div className='comments__image-container'>
            <div className="comments__image"></div>
        </div>
        <form className="comments__form" onSubmit={handleSubmit}>
            <div className='comments__input-container'>
            <label htmlFor="comment-input" className="comments__label">Join the conversation</label>
            <textarea 
                id="comment-input" 
                className="comments__input" 
                name="comment" 
                placeholder="Add a new comment">
            </textarea>
            </div>
            {<ButtonComponent addClass="comments__button" buttonContent="Comment"/>}
        </form>
    </div>
  )
}

export default AddComment;