import App from "../App";

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const increment = () => {
  return { type: "INCREMENT" };
};

export const islogged = () => {
  return { type: "LOGGEDIN" };
};
