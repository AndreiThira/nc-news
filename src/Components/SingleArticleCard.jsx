

const SingleArticleCard = ({article}) =>{
    return (
        <div className="article-detail">
          <h4 className="article-title">{article.title}</h4>
          <h6 className="article-author">Written by     {article.author}</h6>
          <img src={article.article_img_url} alt={`Image related to ${article.topic}`} className="article-image" />
          <div className="article-body">
            <p className="article-paragraph">{article.body}</p>
          </div>
        </div>
      );
    }      

export default SingleArticleCard