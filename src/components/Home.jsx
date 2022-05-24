import React from "react";
import "./Home.css";
import { ProductItem } from "./ProductItem";
import { EmpItem } from "./EmpItem";
import { AllEmp } from "./AllEmp";

export const Home = () => {
  return (
    <div className="home">
      <div className="proditem">
        <ProductItem />
      </div>
      <div className="proditem">
        <EmpItem />
      </div>
      <div className="proditem">
        <AllEmp />
      </div>
    </div>
  );
};
