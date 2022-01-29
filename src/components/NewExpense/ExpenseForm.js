import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = () => {
    
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmout, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    const [userInput, setUserInput] = useState({
        enteredAmout : '',
        enteredTitle : '',
        enteredDate : ''
    })

    const titleChangeHandler = (event)=>{
        // setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })

        setUserInput((prevState)=>{
            return {...prevState, enteredTitle : event.target.value}
        })

    }
    const amountChangeHandler =(event)=>{
        // setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmout: event.target.value
        // })
        setUserInput((prevState)=>{
            return {...prevState, enteredAmout : event.target.value}
        })

    }
    const dateChangeHandler = (event)=>{
        // setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.input.value
        // })
        setUserInput((prevState)=>{
            return {...prevState, enteredDate : event.target.value}
        })
    }
    return (
        <div>
            <form>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="text" min = '0.01' step='0.01' onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max='2022-12-31' onChange={dateChangeHandler} /> 
                    </div>
                </div>
                <div className='new-expense__actions'>
                     <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm