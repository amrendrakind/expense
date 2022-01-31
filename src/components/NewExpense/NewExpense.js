import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const startEditingHandler = ()=>{
    setIsEditing(true)
  }

  const stopEditingHandler = ()=>{
    setIsEditing(false)
  }

return (
    <div className="new-expense">
      <h1>This is new Expense!!</h1>
      {!isEditing && (<button onClick={startEditingHandler}>Add new Expense</button>)}
      {isEditing &&(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
    </div>
  );
};
export default NewExpense;
