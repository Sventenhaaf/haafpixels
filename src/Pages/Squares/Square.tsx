import React, { FC } from "react";

interface Props {
  i: number;
  j: number;
  size: number;
  values: number[];
  sensitivityX: number;
  sensitivityY: number;
  sensitivityPhi: number;
  isDragging: boolean;
  style: { border: string; backgroundColor: string };
}

const INITIAL_OFFSET = 0.3;

const Square: FC<Props> = ({ i, j, size, values, sensitivityX, sensitivityY, sensitivityPhi, isDragging, style }) => {
  const customStyle = values[0] > 0.98 ? { backgroundColor: "#ff000088" } : { backgroundColor: "#00000000" };

  return (
    <div
      style={{
        position: "absolute",
        transition: isDragging ? "none" : "all 800ms",
        transform: `
        
              translateX(${i * size + values[0] * (j + (INITIAL_OFFSET * sensitivityX) / 4) * sensitivityX}px)
              
              translateY(${j * size + values[1] * (j + (INITIAL_OFFSET * sensitivityY) / 4) * sensitivityY}px)

              rotate(${values[2] * (j + (INITIAL_OFFSET * sensitivityPhi) / 4) * 2 * sensitivityPhi}deg)

              `,
        // left: (i * size + values[0] * (j + 0.3)) * sensitivityX,
        // top: j * size + values[1] * (j + 0.3),
        width: size - 1,
        height: size - 1,
        ...style,
        ...customStyle,
        // border: "1px solid transparent",
        // background: "#ff000088",
      }}
    />
  );
};

export default Square;
