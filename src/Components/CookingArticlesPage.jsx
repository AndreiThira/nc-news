import { Link } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import getAllArticles from "../utils/getAllArticles"
import ArticleCard from "./ArticleCard"

const CookingArticlesPage = () =>{
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles().then(({articles})=>{
            const cookingArticles = articles.filter((article) =>
            article.topic === "cooking"
          );
          setArticles(cookingArticles)
            setIsLoading(false)
        }) .catch((error) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])


    return(
        <>
        <Header/>
        <Link to={`/articles/`} className="btn btn-primary">
          Back
        </Link>
        {isError ? <p>Something went wrong while fetching articles</p>: <p>Cooking Articles:</p>}
    {isLoading && !isError ? (<p>Loading...</p>): (

        <ul>
            <li> {articles.map((article)=>{   
                return (
                 <ArticleCard key={article.article_id} article={article}/>
                )
            })}</li>
           
        </ul>
    )}
        </>
    )
}

export default CookingArticlesPage