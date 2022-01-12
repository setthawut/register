
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore, { history } from "./configureStore";
import './styles/index.scss'

const store = configureStore();
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./App", () => {
    render();
  });
}
