import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) { // Using props
  
  const [title, setTitle] = useState(props.title)
  const clickHandler = ()=>{
    setTitle('Updated!!')
  }
  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <div>{props.date.toISOString()}</div> */}
      <h2>{title}</h2>
      <div className="=expense-item__description">
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
