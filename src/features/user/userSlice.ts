import { showErrorNotification } from "utils/notification";
import { showSuccessNotification } from "utils/notification";
import { createSlice } from "@reduxjs/toolkit";
import { EUserRole } from "models";

export type CurrentUser = {
  id : string;
  name: string;        // Combined full name
  role: string;        // Role or job title
  department: string;  // Department or division
  email: string;       // Email address
  phone: string;       // Phone number
  first_name: string;  // First name
  middle_name: string; // Middle name
  last_name: string;   // Last name
  country: string;     // Country
  city: string;        // City
  address: string;     // Street address
  birthday: string;    // Date of birth in DD/MM/YYYY format (consider parsing as Date)
  organization: string;// Organization or company
  zip_code: string;    // ZIP or postal code
};
export type TChangePassword = {
  type: string;
  payload: {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
    onSuccess?: () => void;
    onError?: () => void;
  };
};
type stateType = {
  user: CurrentUser | null;
  getCurrentUserLoading: boolean;
  receiveCurrentUserLoading: boolean;
  logoutLoading: boolean;
  getListUserResponse: CurrentUser[];
  getListUserLoading: boolean;
  changePasswordLoading: boolean;
  getUserProfileLoading: boolean;
  getUserProfileResponse: any;
};

const initialState: stateType = {
  user: null,
  getCurrentUserLoading: false,
  receiveCurrentUserLoading: false,
  logoutLoading: false,
  getListUserResponse: [],
  getListUserLoading: false,
  changePasswordLoading: false,
  getUserProfileLoading: false,
  getUserProfileResponse: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reducerName(_state, _action) {
      /* TODO */
    },
    getCurrentUser(state) {
      state.getCurrentUserLoading = true;
    },
    setCurrentUserData(state, action) {
      state.user = action.payload.profile;
    },
    getCurrentUserSuccess(state, action) {
      state.user = {
        ...action.payload.profile
      };
      // localStorage.setItem("isActive", action.payload.data?.isActive);
      state.getCurrentUserLoading = false;
    },
    getCurrentUserFailure(state) {
      state.getCurrentUserLoading = false;
    },
    getListUserRequest(state) {
      state.getListUserLoading = true;
    },
    getListUserSuccess(state, { payload }) {
      state.getListUserResponse = payload;
      state.getListUserLoading = false;
    },
    getListUserFailure(state) {
      state.getListUserLoading = false;
    },
  },
});

const { actions, reducer } = userSlice;

export { actions as userActions, reducer as userReducer };
