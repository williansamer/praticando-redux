import './App.css';
import SideBar from './components/SideBar';
import Video from './components/Video';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';

const SAVE_STORE = 'save-store';

function persistStore(store){
  localStorage.setItem(SAVE_STORE, JSON.stringify(store));
}

function loadStore(){
  const store = localStorage.getItem(SAVE_STORE);
  return store ? JSON.parse(store) : {};
}

const store = createStore(reducer, loadStore());

store.subscribe(()=>persistStore(store.getState()));

function App() {

  //const store = createStore(reducer);

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
