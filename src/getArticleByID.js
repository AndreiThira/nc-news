import axios from "axios"

const getArticleByID = (articleID) =>{

   return axios.get(`https://nc-news-sem6.onrender.com/api/articles/${articleID}`)
    .then(({data})=>{
    return data
})
}

export default getArticleByID
