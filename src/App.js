import './App.css';
import SideBar from './components/SideBar';
import Video from './components/Video';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';

function App() {

  const store = createStore(reducer);

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
