import { Link } from "react-router-dom"
import Header from "./Header"
import { useEffect, useState } from "react"
import getAllArticles from "../utils/getAllArticles"
import ArticleCard from "./ArticleCard"

const CodingArticlesPage = () =>{
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles().then(({articles})=>{
            const codingArticles = articles.filter((article) =>
            article.topic === "coding"
          );
          setArticles(codingArticles)
            setIsLoading(false)
        }) .catch((error) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
        <Header/>
        <div className="back-container">
        <Link to={`/articles`}>
    <a className="button-32">Back</a>
    </Link>
        </div>
        {isError ? <p>Something went wrong while fetching articles</p>: <p>Coding Articles:</p>}
    {isLoading && !isError ? (<p>Loading...</p>): (
        <div className="article-list">
        <ul>
            <li> {articles.map((article)=>{   
                return (
                 <ArticleCard key={article.article_id} article={article}/>
                )
            })}</li>
           
        </ul>
        </div>
    )}
        </>
    )
}

export default CodingArticlesPage