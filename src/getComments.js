import axios from "axios"

const getComments = (articleId) =>{

   return axios.get(`https://nc-news-sem6.onrender.com/api/articles/${articleId}/comments`)
    .then(({data})=>{
    return data
})
}

export default getComments
