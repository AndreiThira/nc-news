import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./Header"
import SingleArticleCard from "./SingleArticleCard"
import CommentSection from "./CommentSection"
import getArticleByID from "../utils/getArticleByID"



const SingleArticlePage = () =>{
    const {articleId} = useParams()

    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getArticleByID(articleId).then(({article})=>{
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
          <div className="back-container">
        <Link to={`/articles`}>
    <a className="button-32">Back</a>
    </Link>
        </div>
          <div className="single-article-card-page">
            {isError ? <p>Something went wrong</p> : ""}
            {isLoading && !isError ? (
              <p>Loading...</p>
            ) : (
              <SingleArticleCard article={article} />
            )}
          </div>
          <CommentSection articleId={articleId}/>
        </>
      )
    }

export default SingleArticlePage