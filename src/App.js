import "./App.css";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
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
      <NewExpense />
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
