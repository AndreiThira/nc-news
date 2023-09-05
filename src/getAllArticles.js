import axios from "axios"

const getAllArticles = () =>{

   return axios.get(`https://nc-news-sem6.onrender.com/api/articles`)
    .then(({data})=>{
    return data
})
}

export default getAllArticles
