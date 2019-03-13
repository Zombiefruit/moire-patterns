import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const generateLines = () => {
  const lines = [];

  for (let i = 0; i < 1000; i++) {
    lines.push(
      <div
        style={{
          width: "500px",
          position: "fixed",
          top: `${i + 50}px`,
          transform: `translateY(${i}px)`,
          height: "1px",
          marginTop: "1px",
          backgroundColor: "black"
        }}
      />
    );
  }

  return lines;
};

const generateRotatedLines = (deg = 1) => {
  const lines = [];

  for (let i = 0; i < 1000; i++) {
    lines.push(
      <div
        style={{
          width: "500px",
          position: "fixed",
          top: `${i + 50}px`,
          transform: `translateY(${i}px) rotate(${deg}deg)`,
          height: "1px",
          marginTop: "1px",
          backgroundColor: "black"
        }}
      />
    );
  }

  return lines;
};

function App() {
  return (
    <div className="App">
      <input type="range" />
      {generateLines()}
      {generateRotatedLines()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
