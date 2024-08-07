import { call, put, takeEvery } from "redux-saga/effects";
import { authApi } from "./authApi";
import { authActions } from "./authSlice";
import { LoginRequest } from "types/auth/LoginTypes";
import { userActions } from "features/user/userSlice";

export type LoginType = {
  type: string;
  payload: { values: LoginRequest; onSuccess: (role: string) => void };
};

// Worker
export function* loginWorker(action: LoginType): any {
  try {
    console.log("Login Here");
    const response = yield call<any>(authApi.login, {
      payload: action.payload,
    });
    if (response.isSucceeded) {
      yield put(authActions.loginSuccess(response));
      yield put(userActions.getCurrentUser());
      action.payload.onSuccess(response.userDetails.role);
    }
    // TODO: handle callback | onSuccess
  } catch (error: any) {
    console.log({ error });
    yield put(authActions.loginFailure(error));
    // TODO: handle callback | onFailure
  }
}
 
//Watcher
export const authWatcher = [
  takeEvery(authActions.login, loginWorker)
];
