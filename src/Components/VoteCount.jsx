import React, { useState } from "react";
import patchVotes from "./utils/patchVotes";

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
        if (data.status !== 200) {
          setVotes((votes) => votes - 1)
          setVoteDirection(0)
        }
      });
    }
  };

  const handleVoteDown = (event) => {
    event.preventDefault()
    if (voteDirection !== -1) {
      setVotes((votes) => votes - 1)
      setVoteDirection(-1)

      patchVotes(patchVoteDown, articleID).then((data) => {
        if (data.status !== 200) {
          setVotes((votes) => votes + 1)
          setVoteDirection(0)
        }
      });
    }
  };

  return (
    <>
      <button onClick={handleVoteUp} disabled={voteDirection === 1}>
        👍
      </button>
      <button onClick={handleVoteDown} disabled={voteDirection === -1}>
        👎
      </button>
    </>
  );
};

export default VoteCount;
