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
          <Link to="/#" style={{ color: "white", textDecorationLine: "none" }}>
            <Typography color="inherit"> FOLDERS </Typography>
          </Link>

          {context ? (
            <Link
              to="/login"
              style={{ color: "white", textDecorationLine: "none" }}
            >
              <Button color="inherit" onClick={handleLogout}>
                LOGOUT
              </Button>
            </Link>
          ) : null}
        </Toolbar>
      </Router>
    </AppBar>
  );
}
