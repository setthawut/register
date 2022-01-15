import * as dashboard from "./dashboardAction";
export const mapDispatchToProps = (dispatch) => {
  return {
    // Dashboard
    getDashboard: (value) => dispatch(dashboard.getDashboard(value)),
    showData: (value) => dispatch(dashboard.showData(value)),
    getAddress: (value) => dispatch(dashboard.getAddress(value)),
    getAddressDistrict: (value) =>
      dispatch(dashboard.getAddressDistrict(value)),
    getAddressSubDistrict: (province, district) =>
      dispatch(dashboard.getAddressSubDistrict(province, district)),
    createProfile: (value) => dispatch(dashboard.createProfile(value)),
    setCurrentStep: (value) => dispatch(dashboard.setCurrentStep(value)),
  };
};
