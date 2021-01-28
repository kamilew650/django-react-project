import React, { useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import FoldersView from "./views/FoldersView/FoldersView";
import FolderDetailsView from "./views/FolderDetailsView/FolderDetailsView";
import GetCards from "./views/GetCards/GetCards";
import ViewAllCards from "./views/ViewAllCards/ViewAllCards";
import LoginContext from "./context/LoginContext";
import FolderContext from "./context/FolderContext";
import AboutUsView from "./views/AboutUsView/AboutUsView";

export default function Routes() {
  const loginFlag = React.useContext(LoginContext);
  const [context, setContext] = useState(null);

  return (
    <Router>
      {loginFlag ? null : <Redirect to="/login" />}
      <div>
        <FolderContext.Provider value={[context, setContext]}>
          <Switch>
            <Route exact path="/">
              <FoldersView />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
            <Route path="/register">
              <RegisterView />
            </Route>
            <Route path="/folder">
              <FolderDetailsView />
            </Route>
            <Route path="/getCards">
              <GetCards />
            </Route>
            <Route path="/viewAll">
              <ViewAllCards />
            </Route>
            <Route path="/about">
              <AboutUsView />
            </Route>
          </Switch>
        </FolderContext.Provider>
      </div>
    </Router>
  );
}
