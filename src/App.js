import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DummyExpenses = [
  {
    id: "e1",
    title: "Care Insurance",
    amount: 294.67,
    date: new Date(2020, 1, 27),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 94.67,
    date: new Date(2021, 3, 25),
  },
  {
    id: "e3",
    title: "Milk",
    amount: 29.67,
    date: new Date(2021, 12, 2),
  },
  {
    id: "e4",
    title: "New Books",
    amount: 300.67,
    date: new Date(2020, 1, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
