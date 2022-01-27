import "./ExpenseItem.css";
function ExpenseItem(props) { // Using props

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <h2>{props.title}</h2>
      <div className="=expense-item__description">
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
