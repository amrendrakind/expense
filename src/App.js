import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id:'e1', title: "Toilet Paper", amount: 194.67, date: new Date(2021, 9, 1) },
  { id:'e2', title: "New TV", amount: 799.67, date: new Date(2021, 8, 1) },
  { id:'e3', title: "New Desk (Wooden)", amount: 450.05, date: new Date(2021, 6, 1) },
  { id:'e4', title: "Car Insurance", amount: 294.67, date: new Date(2020, 9, 1) },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items= {expenses}/>
    </div>
  );
}

export default App;
