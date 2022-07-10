import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const expense = props.items;
  if (expense.length === 0)
    return <h2 className="expenses-list__fallback">Found no Expensed.</h2>;

  return (
    <ul className="expenses-list ">
      {expense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
