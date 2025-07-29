import "./App.css";
import React from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import { useState, useReducer } from "react";
import { TumMeyvelerContext } from "./components/TumMeyvelerContext";
import { DispatchContext } from "./components/DispatchContext";
import { createNewID } from "./components/utils";

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

const meyvelerReducer = (meyveler, { type, payload }) => {
  switch (type) {
    case "add": {
      let id = createNewID(meyveler) + 1;
      return [...meyveler, { ...payload, id: id }];
    }
    case "delete": {
      return meyveler.filter((meyve) => meyve.id !== payload?.id);
    }
    case "edit": {
      return meyveler.map((meyve) => {
        if (meyve.id == payload?.id) {
          return { ...meyve, isim: payload.yeniMeyve };
        }
        return meyve;
      });
    }
  }
};

function App() {
  const [tumMeyveler, dispatch] = useReducer(meyvelerReducer, [
    {
      id: 0,
      backColor: "white",
      src: "./src/assets/apple.png",
      width: "20px",
      height: 30,
      isim: "Elma",
      cizili: false,
      gizli: false,
    },
    {
      id: 1,
      backColor: "green",
      src: "./src/assets/pear.png",
      width: "20px",
      height: 30,
      isim: "Armut",
      cizili: false,
      gizli: false,
    },
    {
      id: 2,
      backColor: "red",
      src: "./src/assets/banana.png",
      width: "20px",
      height: 30,
      isim: "Muz",
      cizili: false,
      gizli: false,
    },
    {
      id: 3,
      backColor: "magenta",
      src: "./src/assets/cherries.png",
      width: "20px",
      height: 30,
      isim: "Kiraz",
      cizili: false,
      gizli: false,
    },
  ]);

  return (
    <Frame>
      <TumMeyvelerContext value={tumMeyveler}>
        <DispatchContext value={dispatch}>
          <Meyveler />
        </DispatchContext>
      </TumMeyvelerContext>
    </Frame>
  );
}

export default App;
