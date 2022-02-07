import { ROLE_DICE, CHANGE_PLAYERS, CURRENT_SUM } from "../type";

const reducer = (state, action) => {
  switch (action.type) {
    case ROLE_DICE:
      return { ...state, dice: action.payload };

    case CHANGE_PLAYERS:
      return {
        ...state,
        player1Active: !state.player1Active,
        player2Active: !state.player2Active,
      };
    case CURRENT_SUM:
      return {
        ...state,
        currentSum: state.currentSum + state.dice,
      };

    default:
      return state;
  }
};

export default reducer;
