import React from "react";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const { title, amount, date } = expenses;
  return <div className="expenses">Expenses</div>;
};

export default Expenses;
