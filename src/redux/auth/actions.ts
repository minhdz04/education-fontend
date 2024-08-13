// actions.ts
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export interface LoginRequestPayload {
  username: string;
  password: string;
}

export interface LoginSuccessPayload {
  _id: string;
  name: string;
  email: string;
  username: string;
  bio: string;
  profilePic: string;
  token: string;
}

export interface LoginFailurePayload {
  error: string;
}

export const loginRequest = (payload: LoginRequestPayload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: LoginSuccessPayload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload) => ({
  type: LOGIN_FAILURE,
  payload,
});
