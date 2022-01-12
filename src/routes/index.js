import React from "react";
import dashboard from "../containers/dashboard";
import Header from "../containers/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mapDispatchToProps } from "../redux/actions/index";
import { connect } from "react-redux";

const Routes = () => {
  return (
    <>
      <Header key="Header" />
      <Router>
        <Switch>
          <Route exact path="/" component={dashboard} />
        </Switch>
      </Router>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
