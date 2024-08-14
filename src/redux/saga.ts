import { all } from "redux-saga/effects";
import watchAuthSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
    // thêm các saga khác nếu có
  ]);
}
