const ArticleCard = ({article}) => {

    return (
        <div className="card">
            <img className="card-img-top" src={article.article_img_url} alt={article.title}></img>
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text"> Topic: {article.topic}</p>
          <p className="card-text">Votes: {article.votes}</p>
          <p className="card-text">Comments: {article.comment_count}</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>
       
    )
}

export default ArticleCard