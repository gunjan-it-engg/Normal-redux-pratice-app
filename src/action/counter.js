export const decrement = () => {
  return {
    type: "DECREMENT",
    payload: true,
  };
};

export const increment = () => {
  return {
    type: "INCREMENT",
    payload: true,
  };
};
export const loggedIn = () => {
  return {
    type: "LOGGEDIN",
    payload: true,
  };
};
