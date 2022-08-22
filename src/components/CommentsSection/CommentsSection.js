import React from 'react';
import AddComment from '../AddComment/AddComment';
import AddedComments from '../AddedComments/AddedComments';
import "./CommentsSection.scss";

function CommentsSection({selectedVideo, formatDate}) {
  return (
    <div className='comments'>
        <p className='comments__num-of-comments'>{`${selectedVideo.comments.length} Comments`}</p>
        <AddComment />
        <AddedComments 
          selectedVideo={selectedVideo}
          formatDate={formatDate}
        />
    </div>
  )
}

export default CommentsSection;