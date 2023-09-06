import axios from "axios"

const baseURL = "https://nc-marketplace-sem-1.onrender.com/api/users"


const patchVotes = (votesPatch, articleId) =>{
   return axios.patch(`https://nc-news-sem6.onrender.com/api/articles/${articleId}`, votesPatch)
    .then((data)=>{
    return(data)
}) .catch((err)=>{
    return(err);
})
}

export default patchVotes
