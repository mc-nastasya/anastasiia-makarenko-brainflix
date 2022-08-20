import React from 'react';
import AddComment from '../AddComment/AddComment';
import AddedComments from '../AddedComments/AddedComments';
import "./CommentsSection.scss";

function CommentsSection({selectedVideo}) {
  return (
    <div className='comments'>
        <p className='comments__num-of-comments'>3 Comments</p>
        <AddComment />
        <AddedComments selectedVideo={selectedVideo}/>
    </div>
  )
}

export default CommentsSection;