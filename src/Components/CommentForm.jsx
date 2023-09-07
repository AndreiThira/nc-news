import { useState } from "react";
import postComment from "../utils/postComment";

const CommentForm = ({ articleId, setComments, user }) => {
  const [newComment, setNewComment] = useState("");

  const postNewComment = {
    body: newComment,
    username: "grumpy19",
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    postComment(articleId, postNewComment)
      .then(({ data }) => {
        setComments((prevComments) => [data.comment[0], ...prevComments])
        setNewComment("")
      })
      .catch((error) => {
        setComments((prevComments) => prevComments.slice(1));
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
