import React, { FC } from "react";

interface Props {}

const Iteration: FC<Props> = () => {
  return (
    <svg style={{ background: "tomato", margin: 2, width: 40, height: 40 }}>
      <circle cx={15} cy={25} r={10} fill="#444" />
    </svg>
  );
};

export default Iteration;
