
const CommentCard = ({comment}) =>{

    return (
        <figure className="card">
          <figcaption className="card-body">
            <h5 className="card-author">{comment.author}</h5>
            <ul className="card-meta">
              <li className="card-body">{comment.body}</li>
              <li className="card-votes">Votes: {comment.votes}</li>
            </ul>
          </figcaption>
        </figure>
      );
}

export default CommentCard