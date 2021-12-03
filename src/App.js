import { useSelector } from "react-redux";
import React from "react";

function App() {
  const count = useSelector((state) => state.count);

  const login = useSelector((state) => state.login);
  return (
    <div className="App">
      <h1>this is count {count}</h1>
      {login ? <h1>valueable info can be see</h1> : ""}
    </div>
  );
}

export default App;
