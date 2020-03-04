import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const store = initialState => {
  const configStore = createStore(reducers, initialState, applyMiddleware());

  return configStore;
};

export default store;
