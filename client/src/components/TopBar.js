import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { HashRouter as Router, Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

export default function TopBar() {
  const [context, setContext] = useContext(LoginContext);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setContext(false);
  };

  return (
    <AppBar position="static">
      <Router>
        <Toolbar>
          {context ? (
            <Link
              to="/folders"
              style={{
                color: "white",
                textDecorationLine: "none",
                marginRight: "8px",
              }}
            >
              <Typography color="inherit" variant="h6">
                FOLDERS
              </Typography>
            </Link>
          ) : (
            <Link
              to="/register"
              style={{
                color: "white",
                textDecorationLine: "none",
                marginRight: "8px",
              }}
            >
              <Typography color="inherit" variant="h6">
                REGISTER
              </Typography>
            </Link>
          )}
          <Link
            to="/about"
            style={{ color: "white", textDecorationLine: "none" }}
          >
            <Typography color="inherit" variant="h6">
              ABOUT US
            </Typography>
          </Link>
          {context ? (
            <Link
              to="/login"
              style={{
                color: "white",
                textDecorationLine: "none",
                marginRight: "8px",
              }}
            >
              <Button color="inherit" onClick={handleLogout}>
                <Typography color="inherit" variant="h6">
                  LOGOUT
                </Typography>
              </Button>
            </Link>
          ) : null}
        </Toolbar>
      </Router>
    </AppBar>
  );
}
