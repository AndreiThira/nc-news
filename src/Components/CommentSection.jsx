import { useEffect, useState } from "react"

import CommentCard from "./CommentCard"
import getComments from "../getComments"

const CommentSection = ({articleId})=>{
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getComments(articleId).then(({comments})=>{
            setComments(comments)
            setIsLoading(false)
        }) .catch((error) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    return(
    <>
    <p>Comments:</p>
    <ul>
            <li> {comments.map((comment)=>{   
                return (
                 <CommentCard key={comment.comment_id} comment={comment}/>
                )
            })}</li>
           
        </ul>
    </> 
    )
}

export default CommentSection