import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [filterYear, setFilterYear] = useState("2022");
    const addFilter = filterYear => {
        setFilterYear(filterYear);
    };
    const filterArray = props.items.filter((expense) => expense.date.getFullYear().toString() === filterYear);
    const expenseList = filterArray.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    return (
        <Card className='expenses'>
            <ExpensesFilter onAddFilter={addFilter} selectedYear={filterYear}/>
            {expenseList};
        </Card>
    );
};

export default Expenses;