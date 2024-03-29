import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//Demo expenses
const DEMO_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Table (Fiver)",
    amount: 750,
    date: new Date(2022, 8, 12),
  },
];

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, { items: expenses })
// );

function App() {
  const [expenses, setExpenses] = useState(DEMO_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <div>
      <h2 className="Heading">Let's get started!</h2>
      {/* passing data by props */}
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
