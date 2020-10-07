import http, { setJwt } from "./httpService";
import tokenUtil from "../utils/tokenUtils";
import loginUtil from "../utils/loginUtils";

const endpoint = "/Login";

export async function SignIn(auth) {
  localStorage.clear();
  const credentials = { UserName: auth.username, Password: auth.password };
  const { data } = await http.post(`${endpoint}/Auth2`, credentials);
  console.log("TCL: SignIn -> data", data);
  tokenUtil.setToken(data.Token);
  loginUtil.setLoginResponse(data);
}

function SignInWithJWT(jwt) {
  // It will be used in the registration or signup
  tokenUtil.setToken(jwt);
  setJwt(jwt);
}

export function SignOut() {
  tokenUtil.removeToken();
  loginUtil.removeLoginResponse();
}

export default {
  SignOut,
  SignIn,
  SignInWithJWT
};
