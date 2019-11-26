import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./components/layouts/Header";
import Dashboard from "./components/users/Dashboard";
import Alerts from "./components/layouts/Alerts";

import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";

// alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
