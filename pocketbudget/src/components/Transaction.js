import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ t }) {
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <li className={t.amount>0?'plus':'minus'}>
      {t.text}<span>{t.amount < 0 ? '–' : '+'}₹{Math.abs(t.amount)}</span>
      <button className="del-btn" onClick={()=>deleteTransaction(t.id)}>X</button>
    </li>
  );
}

export default Transaction;
