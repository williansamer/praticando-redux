import './App.css';
import SideBar from './components/SideBar';
import Video from './components/Video';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import initialState from "./state/initialState";

const SAVE_ITEM = "saveItem";

function persistState(state){
  localStorage.setItem(SAVE_ITEM, JSON.stringify(state));
}

function loadState(){
  const state = localStorage.getItem(SAVE_ITEM);
  return state ? JSON.parse(state) : initialState;
}

const store = createStore(reducer, loadState()); //Trouble with the preLoadedState loadState()

store.subscribe(()=>{persistState(store.getState())});


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
