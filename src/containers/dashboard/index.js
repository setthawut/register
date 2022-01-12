import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../redux/actions/index";

const Dashboard = (props) => {
  const { getDashboard, dashboards } = props;
  console.log(props);
  useEffect(() => {
    console.log("dashboards");
    getDashboard();
  }, []);

  return (
    <>
      <ul>
        {dashboards.map((item) => (
          <li> {item.name}</li>
        ))}
      </ul>
    </>
  );
};
function mapStateToProps(state) {
  return {
    dashboards: state.dashboard.dashboard,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
