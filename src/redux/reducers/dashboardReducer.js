let GET_DASHBOARD_REQUEST = "GET_DASHBOARD_REQUEST";
let GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
let GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR";

const INITIAL_STATE = {
  dashboard: [],
  fetchRequesting: false,
  fetchError: "",

  refreshPage: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Dashboard
    case GET_DASHBOARD_REQUEST:
      return {
        ...state,
        fetchRequesting: true,
        fetchError: "",
        refreshPage: false,
      };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboard: action.payload,
      };
    case GET_DASHBOARD_ERROR:
      return {
        ...state,
        fetchError: "Get Dashboard error.",
        fetchRequesting: false,
      };

    default:
      return state;
  }
};
