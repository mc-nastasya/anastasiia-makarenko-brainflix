import React from 'react';
import AddComment from '../AddComment/AddComment';
import "./CommentsSection.scss";

function CommentsSection() {
  return (
    <div className='comments'>
        <p className='comments__num-of-comments'>3 Comments</p>
        <AddComment />
    </div>
  )
}

export default CommentsSection;