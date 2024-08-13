<<<<<<< HEAD
import { message } from "antd";
// sagas.ts
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import * as AuthService from "../../services/auth-service/auth-services";
import {
  LOGIN_REQUEST,
  loginFailure,
  LoginFailurePayload,
  LoginRequestPayload,
  loginSuccess,
  LoginSuccessPayload,
  LOGOUT_REQUEST,
  logoutFailure,
  LogoutFailurePayload,
  logoutSuccess,
  LogoutSuccessPayload,
  REGISTER_REQUEST,
  registerFailure,
  RegisterRequestPayload,
  registerSuccess,
} from "./actions";

interface LoginResponse {
  data: {
    access_token: string;
  };
}

function* loginSaga(action: {
  type: string;
  payload: LoginRequestPayload;
}): Generator<
  | CallEffect<LoginResponse>
  | PutEffect<{
      type: string;
      payload: LoginSuccessPayload | LoginFailurePayload;
    }>,
  void,
  LoginResponse
> {
  try {
    const response: LoginResponse = yield call(
      AuthService.loginUser,
      action.payload,
    );
    const { data } = response;
    localStorage.setItem("token", data.access_token);
    message.success("Login successful!");
    yield put(loginSuccess(data));
  } catch (error: any) {
    localStorage.clear();
    const errorMessage = error.response?.data?.message || "Login failed";
    message.error(`Login failed: ${errorMessage}`);
=======
// sagas.ts
import { AxiosResponse } from "axios";
import { push } from "connected-react-router";
import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";
import {
    LOGIN_REQUEST,
    loginFailure,
    LoginRequestPayload,
    loginSuccess,
} from "./actions";

interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  username: string;
  bio: string;
  profilePic: string;
  token: string;
}

function* loginSaga(action: { type: string; payload: LoginRequestPayload }) {
  try {
    const response: AxiosResponse<LoginResponse> = yield call(
      axiosInstance.post,
      "/api/users/login",
      action.payload
    );
    const { data } = response;
    // Lưu token vào localStorage
    localStorage.setItem("token", data.token);
    yield put(loginSuccess(data));
    yield put(push("/"));
  } catch (error: any) {
>>>>>>> c87f549 (init project)
    yield put(loginFailure({ error: error.message }));
  }
}

<<<<<<< HEAD
function* registerSaga(action: {
  type: string;
  payload: RegisterRequestPayload;
}) {
  try {
    const response: LoginResponse = yield call(
      AuthService.registerUser,
      action.payload,
    );
    const { data } = response;
    console.log("Data : ", data);
    message.success("Registration successful!");
    yield put(registerSuccess(data));
  } catch (error: any) {
    console.log(error);
    const errorMessage = error?.response.data.message || "Registration failed";
    message.error(`Registration failed: ${errorMessage}`);
    yield put(registerFailure({ error: errorMessage + "" }));
  }
}

function* logoutSaga(): Generator<
  | CallEffect<void>
  | PutEffect<{
      type: string;
      payload: LogoutSuccessPayload | LogoutFailurePayload;
    }>,
  void,
  void
> {
  try {
    yield call(AuthService.logout);
    message.success("Logout successful!");
    yield put(logoutSuccess({}));
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "Logout failed";
    message.error(`Logout failed: ${errorMessage}`);
    yield put(logoutFailure({ error: error.message }));
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
=======
export default function* watchLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
>>>>>>> c87f549 (init project)
}
