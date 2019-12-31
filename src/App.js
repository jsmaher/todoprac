import React from 'react';
import Home from './Container/Home/Home'
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
            <Provider store= {store}>
      <Home />
      </Provider>
    </div>
  );
}

export default App;
