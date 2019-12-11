const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          bookId: action.id,
          avatar: action.quantity,
          name: action.name,
          message: action.message
        }
      ];
    default:
      return state;
  }
};

export default comments;
