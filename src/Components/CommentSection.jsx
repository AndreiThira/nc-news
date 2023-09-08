import React, { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import getComments from "../utils/getComments"
import CommentForm from "./CommentForm"

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [showCommentForm, setShowCommentForm] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getComments(articleId)
      .then(({ comments }) => {
        setComments(comments)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        setIsLoading(false)
      });
  }, [articleId])

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm)
  }

  return (
    <>
    <div className="comment-button-container">
       <p>Comments:</p>
       <div className="add-comment-button">
      <button  className= "button-32" onClick={toggleCommentForm}>New Comment</button>
       </div>
    </div>
      {showCommentForm && (
        <CommentForm articleId={articleId} setComments={setComments} />
      )}
      {isError ?  <p>Error fetching comments.</p> : ""}
      {isLoading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <div className="comments-container">
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />
          })}
        </ul>

        </div>
      )}
    </>
  )
        }


export default CommentSection
