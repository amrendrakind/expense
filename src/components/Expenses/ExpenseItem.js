
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) { // Using props
  
  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <div>{props.date.toISOString()}</div> */}
      <h2>{props.title}</h2>
      <div className="=expense-item__description">
        <div className="expense-item__price">₹{props.amount}</div>
      </div>

    </Card>
  );
}
export default ExpenseItem;
