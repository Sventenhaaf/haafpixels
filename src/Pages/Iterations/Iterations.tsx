import React, { FC, useRef, useEffect, useState } from "react";
import Iteration from "./Iteration";
import FirstRender from "./FirstRender";

const X_AMOUNT = 10;
const Y_AMOUNT = 10;
const STRIPE_AMOUNT = 20;

const xArray = new Array(X_AMOUNT).fill(0);
const yArray = new Array(Y_AMOUNT).fill(0);
const stripeArray = new Array(STRIPE_AMOUNT).fill(0);

const getRandomValues = (xArray: number[], yArray: number[], stripeArray: number[]) =>
  xArray.map(() => yArray.map(() => stripeArray.map(() => [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1])));

const Iterations: FC<{}> = () => {
  const [array, setArray] = useState(getRandomValues(xArray, yArray, stripeArray));
  const _interval = useRef(true);

  //   return <FirstRender />;
  // useEffect(() => {
  //     //   useEffect(() => {
  //         setTimeout(() => setArray(getRandomValues(widthArray, heightArray)), 10);
  //     //   }, []);
  // })

  useEffect(() => {
    const interval = setInterval(() => _interval.current && setArray(getRandomValues(xArray, yArray, stripeArray)), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      {xArray.map((_, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row" }}>
          {yArray.map(
            (_, j) => (
              <Iteration key={j} array={array[i][j]} />
            )
            // <div key={i + "_" + j}>HOI</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Iterations;
