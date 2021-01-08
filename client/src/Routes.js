import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginView from "./views/LoginView/LoginView";
import FoldersView from "./views/FoldersView/FoldersView";
import FolderDetailsView from "./views/FolderDetailsView/FolderDetailsView";
import LoginContext from "./context/LoginContext";

export default function Routes() {
  const loginFlag = React.useContext(LoginContext);

  return (
    <Router>
      {loginFlag ? null : <Redirect to="/login" />}
      <div>
        <Switch>
          <Route exact path="/">
            <FoldersView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/folder">
            <FolderDetailsView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
