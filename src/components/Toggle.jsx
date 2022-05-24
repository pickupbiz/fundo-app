import React, { useState } from "react";

export const Toggle = () => {
  const [bulb, setBulb] = useState("bulb");
  return (
    <div className="proditem">
      <div className={bulb}></div>
      <button onClick={() => setBulb("bulbred")}>Red</button>
      <button onClick={() => setBulb("bulbgreen")}>Green</button>
    </div>
  );
};
