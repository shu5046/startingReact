import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//INitial state
const initialState = {
  transactions: [],
};

//Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Actions
  function addTransaction(transaction) {
    dispatch({
      type: "add_transaction",
      payload: transaction,
    });
  }
  function deleteTransaction(id) {
    dispatch({ type: "delete_transaction", payload: id });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
