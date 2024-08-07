
import { call, put, takeEvery } from "redux-saga/effects";
import { userApi } from "./userApi";
import { TChangePassword, userActions } from "./userSlice";
import { clearTokenWhenLogout } from "utils/helpers";

type ActionType = {
  type: string;
  payload: any;
};

export function* userWorker({ payload }: ActionType): Generator {
  try {
    yield call(userApi.getAlluser, payload);
    // yield put(userActions.success(response));
    // TODO: handle callback | onSuccess
  } catch (error) {
    // yield put(userActions.failure(error));
    // TODO: handle callback | onFailure
  }
}

export function* getCurrentUserWorker(): any {
  try {
    const response = yield call(userApi.getCurrentUser);
    yield put(userActions.getCurrentUserSuccess(response));
    // yield put(userActions.receiveCurrentUser(response));
    // yield put(userActions.receiveCurrentUserSuccess());
    // TODO: handle callback | onSuccess
  } catch (error) {
    // yield put(userActions.failure(error));
    yield put(userActions.getCurrentUserFailure());
    // TODO: handle callback | onFailure
  }
}


export function* getListUserWorker(): any {
  try {
    const response = yield call(userApi.getListUser);
    yield put(userActions.getListUserSuccess(response));
  } catch (error) {
    yield put(userActions.getListUserFailure());
    // TODO: handle callback | onFailure
  }
}
/*Watcher*/
export const userWatcher = [
  takeEvery(userActions.reducerName, userWorker),
  takeEvery(userActions.getCurrentUser, getCurrentUserWorker),
  takeEvery(userActions.getListUserRequest, getListUserWorker),
];
