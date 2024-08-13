import { all } from "redux-saga/effects";
import watchLoginSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    // thêm các saga khác nếu có
  ]);
}
