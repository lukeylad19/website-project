import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "./reducers/MainReducer";
import thunk from "redux-thunk";

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type Store = ReturnType<typeof mainReducer>;

export default store;
