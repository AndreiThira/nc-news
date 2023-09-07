import axios from "axios"


const postComment = (articleId, postNewComment) =>{
   return axios.post(`https://nc-news-sem6.onrender.com/api/articles/${articleId}/comments`, postNewComment)
    .then((data)=>{

    return(data)
}) .catch((err)=>{
    return(err);
})
}

export default postComment
