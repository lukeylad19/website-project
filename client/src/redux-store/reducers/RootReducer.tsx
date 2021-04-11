import produce from "immer";
import { combineReducers } from "redux";
import mainReducer from "./MainReducer";

const ApplicationReducer = combineReducers({
  main: mainReducer,
});

const RootReducer = (state: any, action: any) => {
  return ApplicationReducer(state, action);
};

export default RootReducer;
