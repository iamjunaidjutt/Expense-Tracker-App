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
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
                {/* <ExpenseItem title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date} /> */}
            </Card>
    );
};

export default Expenses;