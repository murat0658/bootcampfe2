import React from "react";
import { useDispatch } from "react-redux";
import { delet } from "../meyveSlice";
function Meyve({ meyve }) {
  const dispatch = useDispatch();
  const deleteMeyve = (id) => {
    dispatch(delet(id));
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
      <div> {meyve.isim}</div>
      <div onClick={() => deleteMeyve(meyve.id)}>X</div>
    </li>
  );

  return cizili ? <del>{comp}</del> : comp;
}

export default Meyve;
