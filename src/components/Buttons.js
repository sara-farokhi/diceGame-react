import { useContext } from "react";
import Context from "../context/Context";

const Buttons = () => {
  let { roleDice, dice, addCurrentSum, changePlayers, resetCurrentSum } =
    useContext(Context);

  const roleDiceHandler = () => {
    roleDice();
    addCurrentSum();
  };

  const changePlayerHandler = () => {
    resetCurrentSum();
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
