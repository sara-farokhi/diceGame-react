import { useContext } from "react";
import Context from "../context/Context";

const Buttons = () => {
  let {
    roleDice,
    dice,
    // player1Active,
    // player2Active,
    changePlayers,
    diceValues,
  } = useContext(Context);

  const roleDiceHandler = () => {
    roleDice();
  };

  const changePlayerHandler = () => {
    changePlayers();
  };

  return (
    <>
      <button className="new">new game</button>
      <button className="role" onClick={roleDiceHandler}>
        role dice
      </button>
      <button className="hold" onClick={changePlayerHandler}>
        hold
      </button>
      {dice !== null && (
        <img
          className="img-dice"
          src={`images/dice-${dice}.png`}
          alt="dice"
        ></img>
      )}
    </>
  );
};

export default Buttons;
