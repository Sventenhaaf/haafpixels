import React from "react";
import "./App.css";
import { Home, New, Squares } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squares" element={<Squares />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
