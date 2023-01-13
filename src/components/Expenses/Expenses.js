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
    return (
        <Card className='expenses'>
            <ExpensesFilter onAddFilter={addFilter} selectedYear={filterYear}/>
            {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)};
        </Card>
    );
};

export default Expenses;