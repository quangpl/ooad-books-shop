const carts = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          id: action.id,
          quantity: action.quantity,
        }
      ];
    case "DELETE_FROM_CART":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default carts;
