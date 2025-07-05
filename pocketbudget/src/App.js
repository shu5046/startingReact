import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import ExpenseBarChart from "./components/Graph";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="app-layout">
        <div className="left-column">
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </div>

        <div className="middle-column">
          <AddTransaction />
        </div>
        <div className="right-column">
          <ExpenseBarChart />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
