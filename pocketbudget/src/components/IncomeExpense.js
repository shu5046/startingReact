import { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const { income, expense } = useMemo(() => {
  return transactions.reduce(
      (totals, t) => {
        if (t.amount > 0) {
          totals.income += t.amount;
        } else {
          totals.expense += t.amount;
        }
        return totals;
      },
      { income: 0, expense: 0 }
    );
  }, [transactions]);
  return (
    <div className="inc-exp-container">
      <div id="income">
        <h4>Income</h4>
        <p>₹{income}</p>
      </div>
      <div id="expense">
        <h4>Expense</h4>
        <p>₹{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
