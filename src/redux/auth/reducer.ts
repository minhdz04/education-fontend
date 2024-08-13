<<<<<<< HEAD
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actions";

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  user: null,
  loading: false,
  error: null,
  isRegisteSuccess: false,
=======
// reducer.ts
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
>>>>>>> c87f549 (init project)
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
<<<<<<< HEAD
    //login
=======
>>>>>>> c87f549 (init project)
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
<<<<<<< HEAD
    //logout
    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, isAuthenticated: false, user: null };
    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    //register
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegisteSuccess: true,
        user: action.payload,
      };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
=======
>>>>>>> c87f549 (init project)
    default:
      return state;
  }
}
