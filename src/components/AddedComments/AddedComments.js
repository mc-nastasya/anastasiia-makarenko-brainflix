import "./AddedComments.scss"

function AddedComments({selectedVideo}) {
    const comments = selectedVideo.comments;

    return (
    <div className="comments__added">
        {
            comments.map((comment)=>{
                return(
                    <div className="comments__card card" key={comment.id}>
                        <div className="card__left">
                            <div className="card__image"></div>
                        </div>
                        <div className="card__right">
                            <div className="card__top">
                                <p className="card__name">{comment.name}</p>
                                <p className="card__date">{comment.timestamp}</p>
                            </div>
                            <p className="card__comment">{comment.comment}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}

export default AddedComments;