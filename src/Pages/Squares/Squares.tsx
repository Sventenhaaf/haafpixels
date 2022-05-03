import React, { FC, useState } from "react";
import Nees from "./Nees";

const Squares: FC<{}> = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>SQUARES</div>
      <br />
      <Nees />
      <br />

      <div>Want to get started with generative art</div>
      <div>Some logic for keeping the canvas at the right size, depending on the screen</div>
      <div>Keep randomized arrays the same until you hit 'randomize' or change number or squares</div>
    </div>
  );
};

export default Squares;
