import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { getCookie } from "./Helpers/cookies";
import { checkLogin } from "./actions/login";
const store = createStore(allReducers);
// Initialize auth state from cookie on load

const existingToken = getCookie("token");
if (existingToken) {
  store.dispatch(checkLogin(true));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
