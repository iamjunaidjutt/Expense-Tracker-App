import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // });
    const titleHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value}; 
        // })
        setTitle(event.target.value);
    };
    const amountHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value}; 
        // })
        setAmount(event.target.value);
    };
    const dateHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value}; 
        // })
        setDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const userInput = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.data(userInput);
        setTitle("");
        setAmount("");
        setDate("");
        props.onStopEditing();
    };
    const stopEditing = () => {
        props.onStopEditing();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={date} onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={stopEditing}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;