import axios from "axios";

let GET_DASHBOARD_REQUEST = "GET_DASHBOARD_REQUEST";
let GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
let GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR";

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
