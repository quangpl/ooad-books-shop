export const addToCard = (id, quantity) => ({
  type: "ADD_TO_CART",
  id,
  quantity
});

export const deleteFromCart = id => ({
  type: "DELETE_FROM_CART",
  id
});

export const addToBookmark = (id, quantity) => ({
  type: "ADD_TO_BOOKMARK",
  id,
  quantity
});

export const deleteFromBookmark = id => ({
  type: "DELETE_FROM_BOOKMARK",
  id
});

export const addComment = (id, quantity, name, message) => ({
  type: "ADD_COMMENT",
  id,
  quantity,
  name,
  message
});
