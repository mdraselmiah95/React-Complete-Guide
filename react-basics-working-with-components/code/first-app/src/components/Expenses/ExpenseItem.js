import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  const { title, amount, date } = expenses;
  return (
    <Card className="expense-item">
      {/* <ExpenseDate date={props.date} /> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
