import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // thêm các reducer khác nếu có
});

export default rootReducer;
