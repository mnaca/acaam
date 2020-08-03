import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main";
import { BrowserRouter, Router } from "react-router-dom";

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
