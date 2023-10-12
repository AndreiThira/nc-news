import React, { useState } from "react"
import patchVotes from "../utils/patchVotes";


const VoteCount = ({ setVotes, articleID }) => {
  const [voteDirection, setVoteDirection] = useState(0)

  const patchVoteUp = {
    inc_votes: 1,
  }

  const patchVoteDown = {
    inc_votes: -1,
  }

  const handleVoteUp = (event) => {
    event.preventDefault()
    if (voteDirection !== 1) {
      setVotes((votes) => votes + 1)
      setVoteDirection(1)

      patchVotes(patchVoteUp, articleID).then((data) => {
      }).catch((err)=>{
        setVotes((votes) => votes - 1)
          setVoteDirection(0)
      })
    }
  };

  const handleVoteDown = (event) => {
    event.preventDefault();
    if (voteDirection !== -1) {
      console.log("Before vote down: voteDirection =", voteDirection);
      setVotes((votes) => votes - 1);
      setVoteDirection(-1);
      console.log("After vote down: voteDirection =", voteDirection);
  
      patchVotes(patchVoteDown, articleID)
        .then((data) => {
          console.log("Vote down API response:", data);
          if (data.status !== 200) {
            setVotes((votes) => votes + 1);
            setVoteDirection(0);
            console.log("Vote down failed. Reverting voteDirection =", voteDirection);
          }
        });
    }
  };

  return (
    <>
    <div className="vote-button-container">
      <button className="button-32" onClick={handleVoteUp} disabled={voteDirection === 1}>
        👍
      </button>
      <button className="button-32" onClick={handleVoteDown} disabled={voteDirection === -1}>
        👎
      </button>
    </div>
    </>
  );
};

export default VoteCount;
