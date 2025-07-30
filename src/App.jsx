import "./App.css";
import React from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import { useState, useReducer } from "react";
import { TumMeyvelerContext } from "./components/TumMeyvelerContext";
import { DispatchContext } from "./components/DispatchContext";
import { createNewID } from "./components/utils";
import Posts from "./components/Posts";
import { useOnlineStatus } from "./components/StatusBar";
import { useDispatch, useSelector } from "react-redux";
import { decrementOne, increment, incrementOne, selector } from "./slice";
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
    case "ciz": {
      return meyveler.map((meyve) => {
        if (meyve.id == payload?.id) {
          return { ...meyve, cizili: payload.cizili };
        }
        return meyve;
      });
    }
  }
};

function App() {
  const { value } = useSelector(selector);
  const dispatch = useDispatch();

  const [tumMeyveler, dispatch1] = useReducer(meyvelerReducer, [
    {
      id: 0,
      backColor: "white",
      src: "./src/assets/apple.png",
      width: "20px",
      height: 30,
      isim: "Elma",
      cizili: true,
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

  const isOnline = useOnlineStatus();

  const [number, setNumber] = useState(0);

  return (
    <Frame>
      <div>{value}</div>
      <button onClick={() => dispatch(incrementOne())}>Increment one</button>
      <button onClick={() => dispatch(decrementOne())}>Decrement one</button>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(increment(number))}>Increment</button>
      {/* <div>{isOnline ? "Online" : "Offline"}</div>
      <TumMeyvelerContext value={tumMeyveler}>
        <DispatchContext value={dispatch1}>
          <Meyveler />
        </DispatchContext>
      </TumMeyvelerContext>
      <Posts /> */}
    </Frame>
  );
}

export default App;
