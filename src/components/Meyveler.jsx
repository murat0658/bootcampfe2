import Meyve from "./Meyve";
import { useReducer, useState } from "react";
import { createNewID } from "./utils";

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

export default function Meyveler() {
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

  const handleEkle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        isim: yeniMeyve,
        backColor: "white",
        src: "./src/assets/apple.png",
        width: "20px",
        height: 30,
        cizili: false,
        gizli: false,
      },
    }),
      setYeniMeyve("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "edit",
      payload: {
        id: selected,
        yeniMeyve,
      },
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };

  const [yeniMeyve, setYeniMeyve] = useState("");
  const [selected, setSelected] = useState("");

  const meyveler = tumMeyveler.filter((item) => !item.gizli);

  return (
    <ol className="liste">
      {meyveler.map((item) => (
        <>
          <input
            type="radio"
            value={selected}
            onClick={() => setSelected(item.id)}
            name="abc"
          />
          <Meyve
            meyve={item}
            key={item.id}
            handleDelete={() => handleDelete(item.id)}
          />
        </>
      ))}
      <form>
        <input
          label="Eklenecek"
          value={yeniMeyve}
          onChange={(e) => setYeniMeyve(e.target.value)}
        />
        <button type="submit" onClick={handleEkle}>
          Ekle
        </button>
        <button type="submit" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </ol>
  );
}
