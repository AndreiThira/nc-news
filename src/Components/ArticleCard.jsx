import { useState } from "react";
import { Link } from "react-router-dom";
import VoteCount from "./VoteCount";

const ArticleCard = ({article}) => {


    return (
        <figure className="card">
          <img className="card-img-top" src={article.article_img_url} alt={`Image related to ${article.topic}`} />
          <figcaption className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <ul className="card-meta">
              <li className="card-item">Topic: {article.topic}</li>
              <li className="card-item">Comments: {article.comment_count}</li>
              <li className="card-item">Votes: {article.votes}</li>
      
            </ul>
            <Link to={`/articles/${article.article_id}`} className="btn btn-primary">
          Read More
        </Link>
          </figcaption>
        </figure>
      );
      
}

export default ArticleCard