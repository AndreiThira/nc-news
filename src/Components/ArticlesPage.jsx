import { useEffect, useState } from "react"
import Header from "./Header"
import ArticleCard from "./ArticleCard"
import getAllArticles from "../utils/getAllArticles"
import { Link } from "react-router-dom"

const ArticlesPage = ({user, setUser}) =>{
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles().then(({articles})=>{
            setArticles(articles)
            setIsLoading(false)
        }) .catch((error) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    return (
    <>
    <Header user={user} setUser={setUser}/>
    <div className="category-container">
    <Link to={`/articles/cooking`}>
    <a className="button-32">Cooking</a>
    </Link>
    <Link to={`/articles/coding`}>
    <a className="button-32">Coding</a>
    </Link>
    <Link to={`/articles/football`}>
    <a className="button-32">Football</a>
    </Link>
    </div>

    
    {isError ? <p>Something went wrong while fetching articles</p>: <p> All Articles:</p>}
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

export default ArticlesPage