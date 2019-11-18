import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Appcomponent from "./components/App";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>LOADING</h1>} persistor={persistor}>
        <Appcomponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
