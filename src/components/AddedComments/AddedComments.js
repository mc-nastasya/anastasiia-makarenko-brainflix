import "./AddedComments.scss"

function AddedComments({selectedVideo}) {
    const comments = selectedVideo.comments;

    function formatDate(date) {
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = ( "0" + (formattedDate.getMonth() + 1)).slice(-2);
        const day = ( "0" + formattedDate.getDate()).slice(-2);
        return `${month}/${day}/${year}`;
    }

    return (
    <div className="comments__added">
        {
            comments.map((comment)=>{
                return(
                    <div className="comments__card card" key={comment.timestamp}>
                        <div className="card__left">
                            <div className="card__image"></div>
                        </div>
                        <div className="card__right">
                            <div className="card__top">
                                <p className="card__name">{comment.name}</p>
                                <p className="card__date">{formatDate(comment.timestamp)}</p>
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