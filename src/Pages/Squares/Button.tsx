import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        onClick(e);
      }}
      style={{
        width: 40,
        height: 40,
        margin: 5,
        background: "#0000ff88",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default Button;
