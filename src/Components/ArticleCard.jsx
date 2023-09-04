const ArticleCard = ({article}) => {

    return (
        <figure className="card">
          <img className="card-img-top" src={article.article_img_url} alt={`Image related to ${article.topic}`} />
          <figcaption className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <ul className="card-meta">
              <li className="card-item">Topic: {article.topic}</li>
              <li className="card-item">Votes: {article.votes}</li>
              <li className="card-item">Comments: {article.comment_count}</li>
            </ul>
            <a href="#" className="btn btn-primary">Read More</a>
          </figcaption>
        </figure>
      );
      
}

export default ArticleCard