import React, { useContext } from "react";
import { LevelContext } from "./LevelContext";

function Frame({ children }) {
  const level = useContext(LevelContext);
  return (
    <div
      className="card"
      style={{
        padding: 10,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 3,
      }}
    >
      <LevelContext value={level + 1}>{children}</LevelContext>
    </div>
  );
}

export default Frame;
