<<<<<<< HEAD
import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // thêm các reducer khác nếu có
=======
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  // các reducer khác
>>>>>>> c87f549 (init project)
});

export default rootReducer;
