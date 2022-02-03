import { useContext } from "react";
import Context from "../context/Context";
import Buttons from "./Buttons";

const Playground = ({ player, playerNum, playerSore, playerSum }) => {
  const { player1Active, player2Active } = useContext(Context);

  return (
    <>
      <div class="parent">
        <div className={`side ${player1Active && "active"}`}>
          <div class="player-1-name">
            <span>player-0</span>
          </div>
          <div class="player-1-score">58</div>
          <div class="player-1-sum">10</div>
        </div>
        <div className={`side ${player2Active && "active"}`}>
          <div class="player-2-name">
            <span>player-1</span>
          </div>
          <div class="player-2-score">58</div>
          <div class="player-2-sum">10</div>
        </div>
        <button class="new">new game</button>
        <Buttons />
      </div>
    </>
  );
};

export default Playground;
