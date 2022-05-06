import React, { FC } from "react";

interface Props {}

const AMOUNT = 10;
const array = new Array(AMOUNT).fill(0);

const Iteration: FC<Props> = () => {
  return (
    <svg
      style={{
        //
        // background: "#eee",
        margin: 12,
        width: 40,
        height: 40,
      }}
    >
      {/* <circle cx={15} cy={25} r={10} fill="#444" /> */}
      <line x1="0" y1="20" x2="10" y2="20" stroke="black" />
      {array.map((_, i) => (
        <line key={i} x1={Math.random() * 40} y1={Math.random() * 40} x2={Math.random() * 40} y2={Math.random() * 40} stroke="black" />
      ))}
    </svg>
  );
};

export default Iteration;
