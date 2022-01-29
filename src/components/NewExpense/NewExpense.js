import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ()=>{
    return (
        <div className='new-expense'>
            <h1>This is new Expense!!</h1>
            <ExpenseForm />
        </div>
    )
}
export default NewExpense