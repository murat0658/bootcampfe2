import React from "react";
function Meyve({ meyve, handleDelete }) {
  const deleteMeyve = (meyveId) => {
    handleDelete(meyveId);
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
      {meyve.isim}
      <div onClick={() => deleteMeyve(meyve.id)}>X</div>
    </li>
  );

  return cizili ? <del>{comp}</del> : comp;
}

export default Meyve;
