import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
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
  return <>
      <NewExpense />
      <Expenses items={expenses}/>
    </>;
}

export default App;
