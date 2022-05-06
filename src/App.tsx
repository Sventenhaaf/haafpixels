import React from "react";
import "./App.css";
import { Home, Iterations, New, Squares, Writing } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squares" element={<Squares />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/new" element={<New />} />
        <Route path="/iterations" element={<Iterations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
