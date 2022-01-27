import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Care Insurance",
      amount: 294.67,
      date: new Date(2022, 1, 27),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 94.67,
      date: new Date(2021, 3, 25),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 29.67,
      date: new Date(2021, 12, 2),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 300.67,
      date: new Date(2020, 1, 12),
    },
  ];
  return (
    <div>
      <h1>Lets get Started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
