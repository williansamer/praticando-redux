import { createStore } from "redux";
import reducer from "../reducers/reducer";
import persistState from "./localStorage/persistState";
import loadState from "./localStorage/loadState";

const store = createStore(reducer, loadState()); //Trouble with the preLoadedState loadState()

store.subscribe(() => {
  persistState(store.getState());
});

export default store;
