import { useState } from "react";
import VoteCount from "./VoteCount";


const SingleArticleCard = ({article}) =>{
  const[votes, setVotes] = useState(article.votes)

  return (
    <div className="single-article-card">
      <div className="content-container-top">
        <ul>
          <li className="card-item"><span className="single-article-title">{article.title}</span></li>
          <li className="card-item">Written by {article.author}</li>
        <li className="card-item">Votes: {article.votes}</li>
          <div className="vote-button-container">
           <VoteCount setVotes={setVotes} articleID={article.article_id}/>
          </div>
      <div className="single-image-container">
        <img
          className="single-article-img"
          src={article.article_img_url}
          alt={`Image related to ${article.topic}`}
        />
      </div>  
       <div className="article-body">
         <p className="article-paragraph">{article.body}</p>
      </div>
        </ul>
      </div>
    </div>
  );
    }      

export default SingleArticleCard