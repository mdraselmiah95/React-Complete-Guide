import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  return (
    // Card Component
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        {/* <button>Click</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
