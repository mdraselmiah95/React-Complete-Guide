import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  //   const { title, amount, date } = expenses;

  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses[0]} />
    </Card>
  );
};

export default Expenses;
