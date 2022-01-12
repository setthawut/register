import * as dashboard from "./dashboardAction";
export const mapDispatchToProps = (dispatch) => {
  return {
    // Dashboard
    getDashboard: (value) => dispatch(dashboard.getDashboard(value)),
  };
};
