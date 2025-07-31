import "./App.css";
import React from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import Posts from "./components/Posts";
import { useOnlineStatus } from "./components/StatusBar";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <Frame>
      <div>{isOnline ? "Online" : "Offline"}</div>
      <Meyveler />
      <Posts />
    </Frame>
  );
}

export default App;
