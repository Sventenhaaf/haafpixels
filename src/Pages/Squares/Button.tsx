import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Square: FC<Props> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: 40,
        height: 40,
        margin: 5,
        background: "#0000ff88",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Square;
