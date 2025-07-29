import Meyve from "./Meyve";
import { useContext, useState } from "react";
import { TumMeyvelerContext } from "./TumMeyvelerContext";
import { DispatchContext } from "./DispatchContext";

export default function Meyveler() {
  const tumMeyveler = useContext(TumMeyvelerContext);
  const dispatch = useContext(DispatchContext);

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
