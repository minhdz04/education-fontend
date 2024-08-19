import { message } from "antd";
// sagas.ts
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import * as AuthService from "../../services/auth-services/auth-services";
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
    _id: string;
    name: string;
    email: string;
    username: string;
    bio: string;
    profilePic: string;
    token: string;
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
    localStorage.setItem("token", data.token);
    message.success("Login successful!");
    yield put(loginSuccess(data));
  } catch (error: any) {
    localStorage.clear();
    const errorMessage =
      error instanceof Error ? error.message : "Login failed";
    message.error(`Login failed: ${errorMessage}`);
    yield put(loginFailure({ error: error.message }));
  }
}

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
    localStorage.setItem("token", data.token);
    message.success("Registration successful!");
    yield put(registerSuccess(data));
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : "Registration failed";
    message.error(`Registration failed: ${errorMessage}`);
    yield put(registerFailure({ error: error.message }));
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
    message.error(`Logout failed`);
    yield put(logoutFailure({ error: error.message }));
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
