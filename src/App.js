import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
