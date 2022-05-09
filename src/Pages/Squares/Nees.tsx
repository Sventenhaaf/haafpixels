/*
NICE TO HAVE:
- Sliders for amount of squares in width and height
- Opacity white background for controls
*/

import React, { useEffect, useState, Fragment, FC, useRef } from "react";
import Square from "./Square";
import Button from "./Button";
import Slider from "./Slider";
import { getDimenstions } from "./util";

interface Props {}

const getRandomValues = (widthArray: number[], heightArray: number[]) =>
  widthArray.map(() => heightArray.map(() => [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1]));

const getZeroValues = (widthArray: number[], heightArray: number[]) => widthArray.map(() => heightArray.map(() => [0, 0, 0]));

const Nees: FC<Props> = ({}) => {
  const [sensitivityX, setSensitivityX] = useState(25);
  const [sensitivityY, setSensitivityY] = useState(25);
  const [sensitivityPhi, setSensitivityPhi] = useState(25);
  const [squaresHeight, setSquaresHeight] = useState(15);
  const [squaresWidth, setSquaresWidth] = useState(27);
  const [hidden, setHidden] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [style, setStyle] = useState({ border: "1px solid black", backgroundColor: "none" });

  const _interval = useRef(true);
  const { width, height, size, widthArray, heightArray } = getDimenstions(squaresWidth, squaresHeight);

  const [array, setArray] = useState(getZeroValues(widthArray, heightArray));

  useEffect(() => {
    setTimeout(() => setArray(getRandomValues(widthArray, heightArray)), 10);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => _interval.current && setArray(getRandomValues(widthArray, heightArray)), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const __interval = () => (_interval.current = !_interval.current);

  const randomize: React.MouseEventHandler<HTMLDivElement> = e => {
    setArray(getRandomValues(widthArray, heightArray));
  };

  const hide: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    setHidden(true);
  };

  const appear: React.MouseEventHandler<HTMLDivElement> = e => {
    setHidden(!hidden);
  };

  const changeStyle: React.MouseEventHandler<HTMLDivElement> = e => {
    if (style.backgroundColor === "none") {
      setStyle({ border: "none", backgroundColor: "#ff000088" });
    } else {
      setStyle({ border: "1px solid black", backgroundColor: "white" });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }} onClick={appear}>
      <div
        style={{
          width,
          height,
          position: "relative",
        }}
      >
        {widthArray.map((_, i) => (
          <Fragment key={i}>
            {heightArray.map((_, j) => (
              <Square
                i={i}
                j={j}
                values={array[i][j]}
                size={size}
                key={j}
                sensitivityX={sensitivityX / 25}
                sensitivityY={sensitivityY / 25}
                sensitivityPhi={sensitivityPhi / 25}
                isDragging={isDragging}
                style={style}
              />
            ))}
          </Fragment>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width,
          height,
          visibility: hidden ? "hidden" : "visible",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1001,
        }}
        onClick={e => {
          e.stopPropagation();
          setHidden(true);
        }}
      >
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <Button onClick={__interval}>I</Button>
          <Button onClick={randomize}>R</Button>
          <Button onClick={changeStyle}>S</Button>
          <Button onClick={hide}>H</Button>
        </div>
        <br />

        <div style={{ width: "80%" }}>
          <Slider value={sensitivityX} onChange={setSensitivityX} setIsDragging={setIsDragging} />
          <br />
          <Slider value={sensitivityY} onChange={setSensitivityY} setIsDragging={setIsDragging} />
          <br />
          <Slider value={sensitivityPhi} onChange={setSensitivityPhi} setIsDragging={setIsDragging} />
          <br />
          <Slider value={squaresWidth} onChange={v => setSquaresWidth(v)} setIsDragging={setIsDragging} />
          <br />
          <Slider value={sensitivityPhi} onChange={setSensitivityPhi} setIsDragging={setIsDragging} />
        </div>
      </div>
    </div>
  );
};

export default Nees;
