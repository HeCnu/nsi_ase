import React, { Component } from "react";
import User from "./components/user";
import Expert from "./components/expert";
import ExpertProfile from "./components/expertProfile";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/userProfile" component={User} />
          <Route path="/expert" component={Expert} />
          <Route path="/expertProfile" component={ExpertProfile} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
