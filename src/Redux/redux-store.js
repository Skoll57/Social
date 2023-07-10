import { combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import dialogsReducer from "./dialogsReducer";
import friendReducer from "./friendReducer";

let reducers = combineReducers({
  mainPage: mainReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendReducer,
});

let store = createStore(reducers);

export default store;
