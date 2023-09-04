import { useEffect, useState } from "react"
import Header from "./Header"
import getAllArticles from "../utils"
import ArticleCard from "./ArticleCard"

const ArticlesPage = ({user, setUser}) =>{
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles().then((articles)=>{
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

    {isError && <p>Something went wrong</p>}
    {isLoading && !isError ? (<p>Loading...</p>): (
        <section>
            {articles.map((article)=>{   
                return (
                 <ArticleCard key={article.article_id} article={article}/>
                )
            })}
          </section>
    )}
    </>
    )
}

export default ArticlesPage