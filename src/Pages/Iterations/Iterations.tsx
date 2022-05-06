import React, { FC } from "react";
import Iteration from "./Iteration";

const X_AMOUNT = 10;
const Y_AMOUNT = 10;

const xArray = new Array(X_AMOUNT).fill(0);
const yArray = new Array(Y_AMOUNT).fill(0);

const Iterations: FC<{}> = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      {xArray.map((_, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row" }}>
          {yArray.map(
            (_, j) => (
              <Iteration key={j} />
            )
            // <div key={i + "_" + j}>HOI</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Iterations;
