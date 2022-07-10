import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (e) => props.onChangeFilter(e.target.value);
  return (
    <Card className="expenses-filter expenses-filter__control ">
      <label for="expense-year">Filter by year</label>
      <select
        id="expense-year"
        value={props.selected}
        onChange={dropDownChangeHandler}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </Card>
  );
};

export default ExpenseFilter;
