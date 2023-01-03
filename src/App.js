import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 1000,
      date: new Date(2000, 1, 1)
    },
    {
      id: 2,
      title: "Food",
      amount: 500,
      date: new Date(2001, 2, 1)
    },
    {
      id: 3,
      title: "Groceries",
      amount: 600,
      date: new Date(2002, 3, 1)
    },
    {
      id: 4,
      title: "Household Insurance",
      amount: 700,
      date: new Date(2003, 4, 1)
    }
  ];
  return (
    <>
      <h2>Its First Heading</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </>
  );
}

export default App;
