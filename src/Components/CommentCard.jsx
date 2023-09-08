
const CommentCard = ({comment}) =>{

    return (
        <figure className="comment-card">
          <figcaption className="comment-body">
            <h5 className="comment-author">{comment.author}</h5>
            <ul className="card-info">
              <li className="card-body">{comment.body}</li>
              <li className="card-votes">Votes: {comment.votes}</li>
            </ul>
          </figcaption>
        </figure>
      );
}

export default CommentCard