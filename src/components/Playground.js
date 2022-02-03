import { useContext } from "react";
import Context from "../context/Context";

const Playground = ({ player, playerNum, playerSore, playerSum }) => {
  const { dice } = useContext(Context);
  console.log(dice);

  return (
    <div className="side active">
      <div className={playerNum}>
        <span>{player}</span>
      </div>
      <div className={playerSore}>58</div>
      <div className={playerSum}>10</div>
    </div>
  );
};

export default Playground;
