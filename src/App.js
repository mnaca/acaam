import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
