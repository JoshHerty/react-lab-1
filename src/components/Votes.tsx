import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVote, chocolatePlus] = useState(0);
  const [vanillaVote, vanillaPlus] = useState(0);
  const [strawberryVote, strawberryPlus] = useState(0);
  const [totalVote, sumOfVotes] = useState(0);
  let chocolateVotePercentage: number = chocolateVote / totalVote;
  let vanillaVotePercentage: number = vanillaVote / totalVote;
  let strawberryVotePercentage: number = strawberryVote / totalVote;

  if (!chocolateVotePercentage) {
    chocolateVotePercentage = 0;
  }

  if (!vanillaVotePercentage) {
    vanillaVotePercentage = 0;
  }

  if (!strawberryVotePercentage) {
    strawberryVotePercentage = 0;
  }

  return (
    <section className="Votes">
      <p>Vote Here</p>
      <div>
        <button
          onClick={() => {
            chocolatePlus((prev) => prev + 1);
            sumOfVotes((prev) => prev + 1);
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            vanillaPlus((prev) => prev + 1);
            sumOfVotes((prev) => prev + 1);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            strawberryPlus((prev) => prev + 1);
            sumOfVotes((prev) => prev + 1);
            console.log(sumOfVotes);
          }}
        >
          Strawberry
        </button>
      </div>
      <p>
        Chocolate: {chocolateVote}{" "}
        {`(${(chocolateVotePercentage * 100).toFixed(1)}%)`}
      </p>
      <div
        className="voting-bar chocolate-vote"
        style={{
          width: `${
            chocolateVotePercentage === 0 ? 5 : 350 * chocolateVotePercentage
          }px`,
        }}
      ></div>
      <p>
        Vanilla: {vanillaVote}{" "}
        {`(${(vanillaVotePercentage * 100).toFixed(1)}%)`}
      </p>
      <div
        className="voting-bar vanilla-vote"
        style={{
          width: `${
            vanillaVotePercentage === 0 ? 5 : 350 * vanillaVotePercentage
          }px`,
        }}
      ></div>
      <p>
        Strawberry: {strawberryVote}{" "}
        {`(${(strawberryVotePercentage * 100).toFixed(1)}%)`}
      </p>
      <div
        className="voting-bar strawberry-vote"
        style={{
          width: `${
            strawberryVotePercentage === 0 ? 5 : 350 * strawberryVotePercentage
          }px`,
        }}
      ></div>
    </section>
  );
};

export default Votes;
