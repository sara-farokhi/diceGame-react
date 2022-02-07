import { useContext } from "react";
import Context from "../context/Context";
import Buttons from "./Buttons";

const Playground = ({
  player,
  playerNum,
  playerSore,
  playerSum,
  currentSum,
}) => {
  const { player1Active, player2Active } = useContext(Context);
  console.log(currentSum);

  return (
    <>
      <div className="parent">
        <div className={`side ${player1Active && "active"}`}>
          <div className="player-1-name">
            <span>player-0</span>
          </div>
          <div className="player-1-score">0</div>
          <div className="player-1-sum">{player1Active ? currentSum : 0}</div>
        </div>
        <div className={`side ${player2Active && "active"}`}>
          <div className="player-2-name">
            <span>player-1</span>
          </div>
          <div className="player-2-score">0</div>
          <div className="player-2-sum">{player2Active ? currentSum : 0}</div>
        </div>
        <button className="new">new game</button>
        <Buttons />
      </div>
    </>
  );
};

export default Playground;
