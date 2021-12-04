let initialState = 5;
export default function CountReducer(state = initialState, action) {
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
}
