import "./App.css";
import SideBar from "./components/SideBar";
import Video from "./components/Video";
import { Provider } from "react-redux";
import store from "./store/store";

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
