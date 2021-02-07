import React from "react";
import { Provider } from "react-redux";

import s from "./App.module.scss";
import { Search } from "./pages/search/Search";
import storeFactory from "./redux/store";
import "antd/dist/antd.css";
const store = storeFactory();

const App = () => {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <Search />
      </div>
    </Provider>
  );
};

export default App;
