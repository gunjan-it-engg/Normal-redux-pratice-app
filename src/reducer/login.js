const islogin = (state = 1, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      const oldstate = state + 1;
      const newstate = !oldstate;
      return newstate;
    default:
      return state;
  }
};

export default islogin;
