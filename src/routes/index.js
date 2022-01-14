import React from "react";
import dashboard from "../containers/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mapDispatchToProps } from "../redux/actions/index";
import { connect } from "react-redux";

const Routes = () => {
  return (
    <>
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
