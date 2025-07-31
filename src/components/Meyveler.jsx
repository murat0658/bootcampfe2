import Meyve from "./Meyve";
import { useRef, useState } from "react";
import { TumMeyvelerContext } from "./TumMeyvelerContext";
import { useDispatch, useSelector } from "react-redux";
import { selector } from "../meyveSlice";
import { add, edit } from "../meyveSlice";
import { createNewID } from "./utils";

export default function Meyveler() {
  const tumMeyveler = useSelector(selector).meyveler;
  const dispatch = useDispatch();

  const handleEkle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(
      add({
        id: createNewID(),
        isim: yeniMeyve,
        backColor: "white",
        src: "./src/assets/apple.png",
        width: "20px",
        height: 30,
        cizili: false,
        gizli: false,
      })
    );
    setYeniMeyve("");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      edit({
        id: selected,
        yeniMeyve,
      })
    );
  };

  const [yeniMeyve, setYeniMeyve] = useState("");
  const [selected, setSelected] = useState("");

  const inputRef = useRef(null);

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
          <Meyve meyve={item} key={item.id} />
        </>
      ))}
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>

      <form>
        <input
          ref={inputRef}
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
