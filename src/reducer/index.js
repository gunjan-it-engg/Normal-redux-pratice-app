import { combineReducers } from "redux";
import CountReducer from "./counter";
import islogin from "./login";

const allreducers = combineReducers({
  count: CountReducer,
  login: islogin,
});

export default allreducers;
