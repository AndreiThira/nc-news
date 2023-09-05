import axios from "axios"

const getAllArticles = (articleId="") =>{

   return axios.get(`https://nc-news-sem6.onrender.com/api/articles/${articleId}`)
    .then(({data})=>{
    return data
})
}

export default getAllArticles
