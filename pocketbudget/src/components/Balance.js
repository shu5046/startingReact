import { useContext, useMemo } from "react"
import { GlobalContext } from "../context/GlobalState"

function Balance() {
    const {transactions} = useContext(GlobalContext);
    const total = useMemo(
        ()=>transactions.reduce((sum,t)=>sum+t.amount,0),
        [transactions]
    )
    return (
        <>
            <h4>Balance</h4>
            <h1 id="balance">₹{total}</h1>
        </>
    )
}

export default Balance
