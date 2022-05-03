import React, { FC } from "react";

interface Props {
  i: number;
  j: number;
  size: number;
  values: number[];
  sensitivityX: number;
  sensitivityY: number;
  isDragging: boolean;
  style: { border: string; background: string };
}

const Square: FC<Props> = ({ i, j, size, values, sensitivityX, sensitivityY, isDragging, style }) => {
  return (
    <div
      style={{
        position: "absolute",
        transition: isDragging ? "none" : "transform 400ms",
        transform: `
        
              translateX(${i * size + values[0] * (j + 0.3) * sensitivityX}px)
              
              translateY(${j * size + values[1] * (j + 0.3) * sensitivityY}px)

              rotate(${values[2] * (j + 0.3)}deg)

              `,
        // left: (i * size + values[0] * (j + 0.3)) * sensitivityX,
        // top: j * size + values[1] * (j + 0.3),
        width: size - 1,
        height: size - 1,
        ...style,
        // border: "1px solid transparent",
        // background: "#ff000088",
      }}
    />
  );
};

export default Square;
