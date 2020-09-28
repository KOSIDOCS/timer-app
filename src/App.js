import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import logo from './logo.svg';
import './App.css';
import NewTimer from './components/new-timer'
import ListTimers from './list-timers'
import { update } from './actions/index'
import { loadState, saveState } from './utils/index'
import throttle from 'lodash/throttle'

// const store = createStore(reducers); // Non-persisted state.

// Persisted state
const persistedState = loadState();
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000)) // tell our store to save state every 1000ms using Lodash's throttle method:

let lastUpdateTime = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime))
}, 50);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <NewTimer />

      <ListTimers />
    </div>
    </Provider>
  );
}

export default App;
