import React from "react";
import { Toggle } from "./Toggle";
import { Counter } from "./Counter";
import { Player } from "./Player";

export const Fun = () => {
  return (
    <div className="home">
      <Toggle />
      <Counter />
      <Player />
    </div>
  );
};
