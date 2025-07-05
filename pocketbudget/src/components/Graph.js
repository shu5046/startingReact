import { useContext, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionBarChart() {
  const { transactions } = useContext(GlobalContext);

  const chartData = useMemo(() => {
    return transactions.map((t) => ({
      name: t.text,
      amount: Math.abs(t.amount),
      type: t.amount > 0 ? "Income" : "Expense",
      color: t.amount > 0 ? "#2ecc71" : "#e74c3c",
    }));
  }, [transactions]);

  return (
    <div className="graph-card">
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Transaction Graph</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2ecc71" stopOpacity={1} />
              <stop offset="100%" stopColor="#27ae60" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e74c3c" stopOpacity={1} />
              <stop offset="100%" stopColor="#c0392b" stopOpacity={0.8} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "0.9rem",
            }}
            formatter={(value) => [`₹${value}`, "Amount"]}
          />
          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
            label={{ position: "top", fill: "#333", fontSize: 12 }}
            animationDuration={800}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${entry.type === "Income" ? "incomeGradient" : "expenseGradient"})`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
