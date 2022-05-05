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
    document.body.style.overflow = "scroll";
    setIsDragging(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        //
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={e => {
          e.stopPropagation();
          onChange(+e.target.value);
        }}
        className="slider"
        id="myRange"
        onInput={onInput}
        onTouchEnd={onMouseUp}
        onMouseUp={onMouseUp}
      />
    </div>
  );
};

export default Slider;
