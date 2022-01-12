import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../redux/actions";

const Header = () => {
  return <h4>Headerrrrrrrr</h4>;
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
