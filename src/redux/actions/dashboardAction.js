import axios from "axios";
import { pathAddress } from "../../constants/index";
import { message } from "antd";
import { db } from "../../config";
import { collection, addDoc } from "firebase/firestore";
const userCollectionRef = collection(db, "users");

let GET_DASHBOARD_REQUEST = "GET_DASHBOARD_REQUEST";
let GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
let GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR";
let GET_ADDRESS_REQUEST = "GET_ADDRESS_REQUEST";
let GET_ADDRESS_SUCCESS = "GET_ADDRESS_SUCCESS";
let GET_ADDRESS_ERROR = "GET_ADDRESS_ERROR";
let GET_ADDRESS_DISTRICT_REQUEST = "GET_ADDRESS_DISTRICT_REQUEST";
let GET_ADDRESS_DISTRICT_SUCCESS = "GET_ADDRESS_DISTRICT_SUCCESS";
let GET_ADDRESS_DISTRICT_ERROR = "GET_ADDRESS_DISTRICT_ERROR";
let GET_ADDRESS_SUBDISTRICT_REQUEST = "GET_ADDRESS_SUBDISTRICT_REQUEST";
let GET_ADDRESS_SUBDISTRICT_SUCCESS = "GET_ADDRESS_SUBDISTRICT_SUCCESS";
let GET_ADDRESS_SUBDISTRICT_ERROR = "GET_ADDRESS_SUBDISTRICT_ERROR";
let CREATE_PROFILE_REQUEST = "CREATE_PROFILE_REQUEST";
let CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
let CREATE_PROFILE_ERROR = "CREATE_PROFILE_ERROR";
let SHOW_DATA = "SHOW_DATA";

export function getDashboard() {
  return (dispatch) => {
    dispatch({ type: GET_DASHBOARD_REQUEST });

    axios
      .get(`https://api.punkapi.com/v2/beers`)

      .then((response) => {
        dispatch({
          type: GET_DASHBOARD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DASHBOARD_ERROR,
          payload: error,
        });
      });
  };
}

export function showData(value) {
  return {
    type: SHOW_DATA,
    payload: value,
  };
}

export function getAddress(value) {
  return (dispatch) => {
    dispatch({ type: GET_ADDRESS_REQUEST });
    var url = `${pathAddress}` + `/${!!value ? value : ""}`;

    axios
      .get(url)

      .then((response) => {
        dispatch({
          type: GET_ADDRESS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ADDRESS_ERROR,
          payload: error,
        });
      });
  };
}

export function getAddressDistrict(province) {
  return (dispatch) => {
    dispatch({ type: GET_ADDRESS_DISTRICT_REQUEST });
    var url = `${pathAddress}/${province}/district`;

    axios
      .get(url)

      .then((response) => {
        dispatch({
          type: GET_ADDRESS_DISTRICT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ADDRESS_DISTRICT_ERROR,
          payload: error,
        });
      });
  };
}
export function getAddressSubDistrict(province, district) {
  return (dispatch) => {
    dispatch({ type: GET_ADDRESS_SUBDISTRICT_REQUEST });
    // var url = `${pathAddress}/${provinces}/district`;
    var url = `${pathAddress}/${province}/district/${district}`;

    axios
      .get(url)

      .then((response) => {
        dispatch({
          type: GET_ADDRESS_SUBDISTRICT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ADDRESS_SUBDISTRICT_ERROR,
          payload: error,
        });
      });
  };
}
export function createProfile(value) {
  return (dispatch) => {
    dispatch({ type: CREATE_PROFILE_REQUEST });
    console.log("value", value);
    addDoc(userCollectionRef, value)
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: CREATE_PROFILE_SUCCESS,
          // payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .post("/api/forms", value)
    //   .then(function (response) {
    //     console.log(response);
    //     dispatch({
    //       type: CREATE_PROFILE_SUCCESS,
    //       // payload: response.data,
    //     });
    //     message.success("Processing complete!");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     dispatch({
    //       type: CREATE_PROFILE_ERROR,
    //       payload: error,
    //     });
    //   });
  };
}
