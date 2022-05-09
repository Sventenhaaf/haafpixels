import React, { FC } from "react";

interface Props {
  array: number[][];
}

const AMOUNT = 20;
// const array = new Array(AMOUNT).fill(0);

const getColor = () => (Math.random() > 0.05 ? "#000000ff" : "#ff000088");

const Iteration: FC<Props> = ({ array }) => {
  const background = getColor();
  return (
    <svg
      style={{
        //
        margin: 12,
        width: 40,
        height: 40,
      }}
    >
      {array.map((_, i) => (
        <line
          //
          //   style={{transi}}
          key={i}
          strokeWidth={1}
          x1={Math.random() * 40}
          y1={Math.random() * 40}
          x2={Math.random() * 40}
          y2={Math.random() * 40}
          stroke={background}
        >
          <animate attributeName="y1" values="40;35;40" dur="1s" repeatCount="indefinite" />
        </line>
      ))}
    </svg>
  );
};

export default Iteration;
