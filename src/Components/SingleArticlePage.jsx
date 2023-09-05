import { useParams } from "react-router-dom"
import getAllArticles from "../utils"
import { useEffect, useState } from "react"
import Header from "./Header"
import SingleArticleCard from "./SingleArticleCard"



const SingleArticlePage = () =>{
    const {articleId} = useParams()

    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getAllArticles(articleId).then(({article})=>{
            const article0 = article[0]
            setArticle(article0)
            setIsLoading(false)
        }) .catch((error) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
          <Header />
          <div className="article-card">
            {isError ? <p>Something went wrong</p> : ""}
            {isLoading && !isError ? (
              <p>Loading...</p>
            ) : (
              <SingleArticleCard article={article} />
            )}
          </div>
        </>
      )
    }

export default SingleArticlePage