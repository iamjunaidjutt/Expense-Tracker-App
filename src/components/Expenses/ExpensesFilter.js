import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filterHandler = event => {
    props.onAddFilter(event.target.value);
  };
  const filterItems = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterHandler} value={props.selectedYear}>
          {filterItems.reverse().map(item => <option value={item}>{item}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;