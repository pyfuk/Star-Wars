import React from "react";
import { Provider } from "react-redux";

import s from "./App.module.scss";
import Test from "./pages/test/TestContainer";
import storeFactory from "./redux/store";
const store = storeFactory();

const App = () => {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <Test />
      </div>
    </Provider>
  );
};

export default App;
