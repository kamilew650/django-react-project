import React, { useState, useEffect } from "react";
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
import useLocalStorage from './utils/useLocalStorage/useLocalStorage'
import FolderContext from "./context/FolderContext";
import AboutUsView from "./views/AboutUsView/AboutUsView";

export default function Routes() {
  const [context, setContext] = useState(null);
  const [token, setToken] = useLocalStorage("token", "");


  return (
    <Router>
      {token ? null : <Redirect to="/login" />}
      <div style={{padding:"6px", minHeight:"calc(100vh - 90px)", display:'flex', justifyContent: "center"}}>
        <FolderContext.Provider value={[context, setContext]}>
          <Switch>
            <Route exact path="/">
              <LoginView />
            </Route>
            <Route  path="/folders">
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
