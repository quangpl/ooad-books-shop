const bookmarks = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BOOKMARK":
      return [
        ...state,
        {
          id: action.id,
        }
      ];
    case "DELETE_FROM_MARK":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default bookmarks;
