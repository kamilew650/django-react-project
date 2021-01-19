import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import LoginContext from "./context/LoginContext";
import TopBar from "./components/TopBar";

function App() {
  const [context, setContext] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) setContext(token);
  }, []);

  return (
    <LoginContext.Provider value={[context, setContext]}>
      <TopBar />
      <Routes />
    </LoginContext.Provider>
  );
}

export default App;
