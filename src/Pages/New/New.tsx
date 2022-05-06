import React, { FC } from "react";

interface Props {}

const a = new Array(400).fill(0);

const New: FC<Props> = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "black" }}>
      {/* <div style-={{ width: 30, height: 20, background: "red" }}></div> */}
      <div style={{ background: "#ff8", width: 30, height: 10, position: "absolute" }}></div>
      {a.map((_, i) => (
        <div
          key={i}
          style={{
            background: "#ffff8814",
            width: 3,
            height: 800,
            position: "absolute",
            transform: `translateY(100px) rotate(${70 - 0.001 * i * i}deg)`,
            transformOrigin: "top left",
          }}
        ></div>
      ))}
    </div>
  );
};

export default New;
