import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography } from "@material-ui/core";
import LoginContext from "../../context/LoginContext";
import useLocalStorage from "../../utils/useLocalStorage/useLocalStorage";

const StyledDiv = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  margin-top: 200px;
`;

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
    <StyledDiv>
      <Typography variant="h3">Login</Typography>
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
      <Button onClick={loginHandler} variant="contained" color="primary">
        Login
      </Button>
    </StyledDiv>
  );
}
