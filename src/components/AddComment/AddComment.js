import React from 'react';
import "./AddComment.scss";

function AddComment() {
  return (
    <div className="comments__add">
        <div className='comments__image-container'>
            <div className="comments__image"></div>
        </div>
        <form className="comments__form">
            <div className='comments__input-container'>
            <label htmlFor="comment-input" className="comments__label">Join the conversation</label>
            <textarea 
                id="comment-input" 
                className="comments__input" 
                name="comment" 
                placeholder="Add a new comment">
            </textarea>
            </div>
            <button 
                className="comments__button" 
                type="submit" 
                value="submit">
                    Comment
            </button>
        </form>
    </div>
  )
}

export default AddComment;