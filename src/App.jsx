import "./App.css";
import React from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import { useState } from "react";
import Header from "./components/Header";
function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{props.name}</div>
      <div>{counter}</div>
      <div onClick={() => setCounter(counter + 1)}>Arttır</div>
    </div>
  );
}

function Component() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter name="Alice" key="Alice" />
      ) : (
        <Counter name="Taylor" key="Taylor" />
      )}
      <div onClick={() => setIsPlayerA(!isPlayerA)}>Set New Player</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Frame>
        <Header>Header</Header>
        <Header>Header</Header>
        <Header>Header</Header>
        <Frame>
          <Header>Sub Header</Header>
          <Header> Sub Header</Header>
          <Header>Sub Header</Header>
          <Frame>
            <Header>Sub Sub Header</Header>
            <Header>Sub Sub Header</Header>
            <Header>Sub Sub Header</Header>
            <Frame>
              <Header>Sub Sub Sub Header</Header>
              <Header>Sub Sub Sub Header</Header>
              <Header>Sub Sub Sub Header</Header>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </div>
  );
}

export default App;
