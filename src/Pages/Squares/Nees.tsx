import React, { useEffect, useState, Fragment, FC } from "react";
import Square from "./Square";
import Button from "./Button";
import Slider from "./Slider";
import { getDimenstions } from "./util";

interface Props {}

const getRandomValues = (widthArray: number[], heightArray: number[]) =>
  widthArray.map(() => heightArray.map(() => [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1]));

const getZeroValues = (widthArray: number[], heightArray: number[]) => widthArray.map(() => heightArray.map(() => [0, 0, 0]));

const Nees: FC<Props> = ({}) => {
  const { width, height, size, widthArray, heightArray } = getDimenstions();
  const [array, setArray] = useState(getZeroValues(widthArray, heightArray));
  const [sensitivityX, setSensitivityX] = useState(50);
  const [sensitivityY, setSensitivityY] = useState(50);
  const [hidden, setHidden] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [style, setStyle] = useState({ border: "1px solid black", background: "none" });

  useEffect(() => {
    setTimeout(() => setArray(getRandomValues(widthArray, heightArray)), 10);
  }, []);

  const randomize: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
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
    e.stopPropagation();
    if (style.background === "none") {
      setStyle({ border: "none", background: "#ff000088" });
    } else {
      setStyle({ border: "1px solid black", background: "none" });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onClick={appear}>
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
                sensitivityX={sensitivityX / 50}
                sensitivityY={sensitivityY / 50}
                isDragging={isDragging}
                style={style}
              />
            ))}
          </Fragment>
        ))}
      </div>

      <div style={{ width, opacity: hidden ? 0 : 1 }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <Button onClick={randomize}>R</Button>
          <Button onClick={changeStyle}>S</Button>
          <Button onClick={hide}>H</Button>
        </div>
        <Slider value={sensitivityX} onChange={setSensitivityX} setIsDragging={setIsDragging} />
        <Slider value={sensitivityY} onChange={setSensitivityY} setIsDragging={setIsDragging} />
      </div>
    </div>
  );
};

export default Nees;
