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
    <Link to={`/articles/cooking`}>
    <a className="btn btn-primary">Cooking</a>
    </Link>
    <Link to={`/articles/coding`}>
    <a className="btn btn-primary">Coding</a>
    </Link>
    <Link to={`/articles/football`}>
    <a className="btn btn-primary">Football</a>
    </Link>

    

    {isError ? <p>Something went wrong while fetching articles</p>: <p>Articles:</p>}
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

export default ArticlesPage