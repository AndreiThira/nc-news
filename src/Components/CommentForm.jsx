import { useState } from "react";
import postComment from "../utils/postComment";

const CommentForm = ({ articleId, setComments, user }) => {
  const [newComment, setNewComment] = useState("");
  const[isSubmitting, setIsSubmitting] = useState(false)

  const postNewComment = {
    body: newComment,
    username: "grumpy19",
  };

  const handleSubmit = (event) => {
    
    event.preventDefault()
    setIsSubmitting(true);
    postComment(articleId, postNewComment)
      .then(({ data }) => {
        setComments((prevComments) => [data.comment[0], ...prevComments])
        setNewComment("")
      })
      .catch((error) => {
        setComments((prevComments) => prevComments.slice(1))
      }) .finally(()=>{
        setIsSubmitting(false);
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
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default CommentForm;
