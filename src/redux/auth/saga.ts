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
    yield put(loginFailure({ error: error.message }));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
