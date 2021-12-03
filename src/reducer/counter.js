import { increment, decrement } from "../action/counter";

const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      const oldstate = state;
      const returnstate = oldstate + 1;

      return returnstate;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default CountReducer;
