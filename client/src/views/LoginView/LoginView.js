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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = useLocalStorage("token", "");
  const [context, setContext] = useContext(LoginContext);
  const history = useHistory();

  const loginHandler = async () => {
    await fetch(
      `http://${process.env.REACT_APP_API_ADDRESS}:${process.env.REACT_APP_API_PORT}/auth/login`,
      {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        setToken(json.token);
      })
      .then(() => setContext(true))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  return (
    <StyledDiv>
      <Typography variant="h3">Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
