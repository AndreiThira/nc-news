import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="image-container">
        <img
          className="article-img"
          src={article.article_img_url}
          alt={`Image related to ${article.topic}`}
        />
      </div>
      <div className="content-container">
        <ul>
          <li className="card-item"><span className="article-title">{article.title}</span></li>
          <li className="card-item">Topic: {article.topic}</li>
          <li className="card-item">Comments: {article.comment_count}</li>
          <li className="card-item">Votes: {article.votes}</li>
        </ul>
        <div className="button-container">
          <Link to={`/articles/${article.article_id}`} className="button-32">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
