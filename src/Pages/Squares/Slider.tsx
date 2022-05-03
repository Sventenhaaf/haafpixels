import React, { FC } from "react";
import "./slider.css";

interface Props {
  value: number;
  onChange: (n: number) => void;
  setIsDragging: (bool: boolean) => void;
}

const Slider: FC<Props> = ({ value, onChange, setIsDragging }) => {
  const onInput = () => {
    document.body.style.overflow = "hidden";
    setIsDragging(true);
  };

  const onMouseUp = () => {
    // console.log("release");
    document.body.style.overflow = "scroll";
    setIsDragging(false);
  };
  return (
    <div style={{ width: "100%" }}>
      <input
        //
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={e => onChange(+e.target.value)}
        className="slider"
        id="myRange"
        onInput={onInput}
        onTouchEnd={onMouseUp}
      />
    </div>
  );
};

export default Slider;
