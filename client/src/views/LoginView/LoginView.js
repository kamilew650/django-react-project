import React, { useContext } from "react";
import useLocalStorage from "../../utils/useLocalStorage/useLocalStorage";
import { useHistory } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

export default function LoginView() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = useLocalStorage("token", "");
  const [context, setContext] = useContext(LoginContext);
  const history = useHistory();

  const loginHandler = () => {
    setToken("XD");
    history.push("/");
    setContext(true);
  };

  return (
    <div>
      <h1>Login screen</h1>
      <h4>It does nothing, just click the button</h4>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
