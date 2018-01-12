let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h, Component } from "preact";
import habitat from "preact-habitat";
import { Provider } from "redux-zero/preact";

import "./style.scss";

import Counter from "./components/Counter";
import store from "./state/store";

class App extends Component {
  render(props) {
    return (
      <div>
        <h1 style={{ color: props.color }}>Hello, World!</h1>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

let _habitat = habitat(App);

_habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true
});
