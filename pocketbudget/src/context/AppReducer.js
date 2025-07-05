export default function AppReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "add_transaction": {
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    }
    case "delete_transaction": {
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== payload),
      };
    }
    default:
      return;
  }
}
