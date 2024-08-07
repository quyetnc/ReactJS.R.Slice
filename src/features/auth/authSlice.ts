import { createSlice } from "@reduxjs/toolkit";
import {
  showErrorNotification,
  showSuccessNotification,
} from "utils/notification";
import { LoginResponse } from "types/auth/LoginTypes";

type stateType = {
  loginResponse: LoginResponse | null;
  loginSuccess: null | boolean;
  loginLoading: boolean;
  logoutLoading: boolean; 
};

const initialState: stateType = {
  loginResponse: null,
  loginSuccess: null,
  loginLoading: false,
  logoutLoading: false 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, _action) {
      state.loginLoading = true;
      /* TODO: reducer for pending*/
    },
    loginSuccess(state, action) {
      /* TODO: reducer for success*/
      const loginResponse = action.payload;
      localStorage.setItem("token", loginResponse.token);
      localStorage.setItem("users", loginResponse.userDetails);
      showSuccessNotification("Login Successfully");
      state.loginResponse = loginResponse;
      state.loginSuccess = true;
      state.loginLoading = false;
    },
    loginFailure(state, action) {
      if (action.payload.response?.data?.errors) {
        showErrorNotification(action.payload.response.data.errors[0].code);
      }
      if (action.payload.response?.data?.error) {
        showErrorNotification(action.payload.response?.data?.error);
      }
      state.loginSuccess = false;
      state.loginLoading = false;
      /* TODO: reducer for failure*/
    },
    // logout(state) {
    //   state.logoutLoading = true;
    //   // state.loginResponse = null;
    //   // localStorage.removeItem("token");
    //   // localStorage.removeItem("expiration");
    // },
    // logoutSuccess(state) {
    //   state.loginResponse = null;
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("expiration");
    //   state.logoutLoading = false;
    // },
    // logoutFailure(state) {
    //   state.logoutLoading = false;
    // },
  },
});

const { actions, reducer } = authSlice;

export { actions as authActions, reducer as authReducer };
