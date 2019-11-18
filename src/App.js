import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/Login/index";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
