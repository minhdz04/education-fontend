import { all } from "redux-saga/effects";
<<<<<<< HEAD
import watchAuthSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
=======
import watchLoginSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
>>>>>>> c87f549 (init project)
    // thêm các saga khác nếu có
  ]);
}
