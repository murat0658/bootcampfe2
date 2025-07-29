import "./App.css";
import React from "react";
import Meyveler from "./components/Meyveler";
import Frame from "./components/Frame";
import { useState } from "react";
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

// function AlertButton({ children, click }) {
//   return (
//     <button
//       style={{
//         backgroundColor: "blue",
//         borderStyle: "solid",
//         borderRadius: 10,
//         color: "white",
//       }}
//       onClick={() => click("Tık")}
//     >
//       {children}
//     </button>
//   );
// }

function App() {
  // const [deger, setDeger] = useState(0);

  // const handleClick = () => {
  //   setDeger(deger + 1);
  //   setDeger((oncekiDeger) => oncekiDeger + 1);
  //   setDeger(deger + 4);
  //   setDeger((oncekiDeger) => oncekiDeger + 1);
  // };

  // const [number, setNumber] = useState(0);

  // const handleClick = (text) => {
  //   alert(text);
  // };

  // const playMovie = (e) => {
  //   e.stopPropagation();
  //   alert("Playing Movie");
  // };

  const [tumMeyveler, setTumMeyveler] = useState([
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

  const [yeniMeyve, setYeniMeyve] = useState({ isim: "" });
  const [changedMeyve, setChangedMeyve] = useState({ isim: "", id: "" });

  const handleDelete = (meyveId) => {
    setTumMeyveler(tumMeyveler.filter((meyve) => meyve.id !== meyveId));
  };

  const ekle = () => {
    setTumMeyveler([
      ...tumMeyveler,
      {
        ...yeniMeyve,
        id: createNewID(tumMeyveler),
        src: "./src/assets/watermelon.png",
        width: "20px",
        height: 30,
        cizili: false,
        gizli: false,
      },
    ]);
    setYeniMeyve({ isim: "" });
  };

  const handleEdit = () => {
    setTumMeyveler(
      tumMeyveler.map((meyve) => {
        if (meyve.id === parseInt(changedMeyve.id)) {
          return {
            ...changedMeyve,
            src: "./src/assets/watermelon.png",
            width: "20px",
            height: 30,
            cizili: false,
            gizli: false,
          };
        }
        return meyve;
      })
    );
    setChangedMeyve({ isim: "", id: "" });
  };

  return (
    <div>
      <Component />
      <Frame>
        <Meyveler tumMeyveler={tumMeyveler} handleDelete={handleDelete} />
        <form>
          <input
            label="Meyve ismi"
            onChange={(e) => {
              setYeniMeyve({ ...yeniMeyve, isim: e.target.value });
            }}
            value={yeniMeyve.isim}
          />
        </form>
        <button onClick={ekle}>Ekle</button>

        <form>
          <label>AD</label>
          <input
            onChange={(e) => {
              setChangedMeyve({ ...changedMeyve, isim: e.target.value });
            }}
            value={changedMeyve.isim}
          />
          <label>ID</label>
          <input
            label="Meyve id"
            type="number"
            onChange={(e) => {
              setChangedMeyve({ ...changedMeyve, id: e.target.value });
            }}
            value={changedMeyve.id}
          />
        </form>
        <button onClick={handleEdit}>Değiştir</button>

        {/* <button onClick={handleClick}>+3</button>
        <div>{deger}</div> */}
        {/* <div>{number}</div>
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <AlertButton click={handleClick}>
          <p style={{ fontSize: 30 }}>Button</p>
        </AlertButton>
        <div
          style={{
            backgroundColor: "grey",
            height: 100,
            justifyContent: "center",
            alignContent: "center",
          }}
          onClick={() => alert("You clicked on the toolbar")}
        >
          <button onClick={(e) => playMovie(e)}>Play movie</button>
          <button onClick={() => alert("Uploading")}>Upload</button>
        </div>
        <form>
          <input />
          <button onClick={(e) => e.preventDefault()}>Send</button>
        </form> */}
      </Frame>
    </div>
  );
}

export default App;
