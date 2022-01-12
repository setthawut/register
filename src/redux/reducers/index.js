import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dashboardReducer from "./dashboardReducer";
const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    dashboard: dashboardReducer,
  });
export default createRootReducer;
