import { useSelector } from "react-redux";
// import { increment, decrement } from "./action/counter";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import React from "react";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  return (
    <div className="App">
      <h1>this is count {count}</h1>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => dispatch({ type: "LOGGEDIN" })}
      >
        LogIn
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        + Add
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        {" "}
        - Subtract{" "}
      </Button>
      <h2>{login ? <h3>You are logged in !</h3> : ""}</h2>
    </div>
  );
}

export default App;
