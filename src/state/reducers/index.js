import { combineReducers, createStore } from "redux";
import page2Reducer from "./page2Reducer";

const reducers = combineReducers({
  dropdownReducer: page2Reducer,
});

export default reducers;
