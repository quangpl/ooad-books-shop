import { combineReducers } from "redux";
import carts from "./carts";
import bookmarks from "./bookmarks";
import comments from "./comments";


export default combineReducers({
  carts,
  bookmarks,
  comments
});
