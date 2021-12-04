export default function islogin(loginuser = true, action) {
  switch (action.type) {
    case "LOGGEDIN":
      const oldstate = loginuser;
      const newstatte = !oldstate;
      return newstatte;
    default:
      return loginuser;
  }
}
