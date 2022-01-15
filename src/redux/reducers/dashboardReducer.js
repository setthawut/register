import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
  GET_ADDRESS_REQUEST,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_ERROR,
  GET_ADDRESS_DISTRICT_REQUEST,
  GET_ADDRESS_DISTRICT_SUCCESS,
  GET_ADDRESS_DISTRICT_ERROR,
  GET_ADDRESS_SUBDISTRICT_REQUEST,
  GET_ADDRESS_SUBDISTRICT_SUCCESS,
  GET_ADDRESS_SUBDISTRICT_ERROR,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  SHOW_DATA,
  SET_CURRENT_STEP,
} from "../../constants/index";

const INITIAL_STATE = {
  dashboard: [],
  fetchRequesting: false,
  fetchError: "",
  data: {},
  dataProvince: [],
  dataDistrict: [],
  dataSubDistrict: [],
  refreshPage: false,
  currentStep: 0,
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
    //Create
    case CREATE_PROFILE_REQUEST:
      return {
        ...state,
        fetchRequesting: true,
        fetchError: "",
        refreshPage: false,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        refreshPage: true,
      };
    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        fetchError: "Create dataProvince error.",
        fetchRequesting: false,
      };
    // Address Province
    case GET_ADDRESS_REQUEST:
      return {
        ...state,
        fetchRequesting: true,
        fetchError: "",
        refreshPage: false,
      };
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        dataProvince: action.payload,
      };
    case GET_ADDRESS_ERROR:
      return {
        ...state,
        fetchError: "Get dataProvince error.",
        fetchRequesting: false,
      };
    // Address District
    case GET_ADDRESS_DISTRICT_REQUEST:
      return {
        ...state,
        fetchRequesting: true,
        fetchError: "",
        refreshPage: false,
      };
    case GET_ADDRESS_DISTRICT_SUCCESS:
      return {
        ...state,
        dataDistrict: action.payload,
      };
    case GET_ADDRESS_DISTRICT_ERROR:
      return {
        ...state,
        fetchError: "Get data District error.",
        fetchRequesting: false,
      };
    // Address SubDistrict
    case GET_ADDRESS_SUBDISTRICT_REQUEST:
      return {
        ...state,
        fetchRequesting: true,
        fetchError: "",
        refreshPage: false,
      };
    case GET_ADDRESS_SUBDISTRICT_SUCCESS:
      return {
        ...state,
        dataSubDistrict: action.payload,
      };
    case GET_ADDRESS_SUBDISTRICT_ERROR:
      return {
        ...state,
        fetchError: "Get data SubDistrict error.",
        fetchRequesting: false,
      };

    //Current Step
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    //Show Data
    case SHOW_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
