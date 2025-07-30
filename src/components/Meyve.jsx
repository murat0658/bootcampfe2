import React, { useContext } from "react";
import { DispatchContext } from "./DispatchContext";
function Meyve({ meyve }) {
  const dispatch = useContext(DispatchContext);
  const deleteMeyve = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };

  const handleCiz = (id, cizili) => {
    dispatch({
      type: "ciz",
      payload: {
        id,
        cizili,
      },
    });
  };

  const { width, height, src, cizili, backColor } = meyve;
  const comp = (
    <li
      style={{
        backgroundColor: backColor,
        fontSize: 20,
      }}
    >
      <img
        src={src}
        width={width}
        height={height}
        style={{
          borderWidth: "2px",
          borderColor: "black",
          borderStyle: "solid",
        }}
      />
      <div onClick={() => handleCiz(meyve.id, !meyve.cizili)}>{meyve.isim}</div>
      <div onClick={() => deleteMeyve(meyve.id)}>X</div>
    </li>
  );

  return cizili ? <del>{comp}</del> : comp;
}

export default Meyve;
