import "./App.css";
import SideBar from "./components/SideBar";
import Video from "./components/Video";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";

import persistState from "./localStorage/persistState";
import loadState from "./localStorage/loadState";

const store = createStore(reducer, loadState()); //Trouble with the preLoadedState loadState()

store.subscribe(() => {
  persistState(store.getState());
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SideBar></SideBar>
        <Video></Video>
      </Provider>
    </div>
  );
}

export default App;
