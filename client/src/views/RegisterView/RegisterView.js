import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import LoginContext from "../../context/LoginContext";
import useLocalStorage from "../../utils/useLocalStorage/useLocalStorage";

const StyledDiv = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function RegisterView() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [token, setToken] = useLocalStorage("token", "");
  const [context, setContext] = useContext(LoginContext);
  const history = useHistory();

  const loginHandler = () => {
    setToken("XD");
    history.push("/");
    setContext(true);
  };

  return (
    <StyledDiv>
      <h1>Login screen</h1>
      <TextField
        label="Login"
        variant="outlined"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Button
        onClick={loginHandler}
        variant="contained"
        color="primary"
        disabled={!(passwordConfirm === password) && password !== ""}
      >
        Login
      </Button>
    </StyledDiv>
  );
}
