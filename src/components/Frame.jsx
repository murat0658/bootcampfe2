import React from "react";

function Frame(props) {
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
      {props.children}
    </div>
  );
}

export default Frame;
