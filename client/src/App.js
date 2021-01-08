import React, { useState } from "react";
import Routes from "./Routes";
import LoginContext from "./context/LoginContext";
import TopBar from "./components/TopBar";

function App() {
  const [context, setContext] = useState(null);

  return (
    <LoginContext.Provider value={[context, setContext]}>
      <TopBar />
      <Routes />
    </LoginContext.Provider>
  );
}

export default App;
