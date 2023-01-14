import React, { useState } from 'react';
import ExpenseList from './ExpenseList'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [filterYear, setFilterYear] = useState("2022");
    const addFilter = filterYear => {
        setFilterYear(filterYear);
    };
    const filterArray = props.items.filter((expense) => expense.date.getFullYear().toString() === filterYear);
    
    return (
        <Card className='expenses'>
            <ExpensesFilter onAddFilter={addFilter} selectedYear={filterYear}/>
            <ExpenseList items={filterArray} />
        </Card>
    );
};

export default Expenses;