import React, { useState } from "react";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  return (
    <div className="proditem">
      <button onClick={() => setCntr(cntr - 1)}>-</button>
      <h1>{cntr}</h1>
      <button onClick={() => setCntr(cntr + 1)}>+</button>
    </div>
  );
};
