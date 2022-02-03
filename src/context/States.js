import { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";

const States = ({ children }) => {
  const initialState = {
    dice: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        dice: state.dice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default States;
