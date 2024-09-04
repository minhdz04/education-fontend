// Existing action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// Register
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Login
export interface LoginRequestPayload {
  username: string;
  password: string;
}
export interface LoginSuccessPayload {
  access_token: string;
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
// End login

// Logout
export interface LogoutRequestPayload {}
export interface LogoutSuccessPayload {}
export interface LogoutFailurePayload {
  error: string;
}
export const logoutRequest = (payload: LogoutRequestPayload) => ({
  type: LOGOUT_REQUEST,
  payload,
});
export const logoutSuccess = (payload: LogoutSuccessPayload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});
export const logoutFailure = (payload: LogoutFailurePayload) => ({
  type: LOGOUT_FAILURE,
  payload,
});
// End logout

// Register
export interface RegisterRequestPayload {
  username: string;
  password: string;
  re_password: string;
  name: string;
  email: string;
}

export interface RegisterSuccessPayload {
  access_token: string;
}

export interface RegisterFailurePayload {
  error: string;
}

export const registerRequest = (payload: RegisterRequestPayload) => ({
  type: REGISTER_REQUEST,
  payload,
});

export const registerSuccess = (payload: RegisterSuccessPayload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFailure = (payload: RegisterFailurePayload) => ({
  type: REGISTER_FAILURE,
  payload,
});
// End register
