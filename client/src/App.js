import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useLocalStorage from "./utils/useLocalStorage/useLocalStorage";
import LoginView from "./views/LoginView/LoginView";
import FoldersView from "./views/FoldersView/FoldersView";
import FolderDetailsView from "./views/FolderDetailsView/FolderDetailsView";

function App() {
  const [token, setToken] = useLocalStorage("token", "");

  return (
    <Router>
      {token ? null : <Redirect to="login" />}
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

export default App;
