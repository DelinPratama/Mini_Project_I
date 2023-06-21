import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-hot-toast";

// @import async thunk
import { login, keepLogin, register, logout, verifyAccount, updateImageProfile } from "./slices";

// @initial state
const INITIAL_STATE = {
  isLoginLoading: false,
  isKeepLoginLoading: false,
  isRegisterLoading: false,
  isLogoutLoading: false,
  isUploadImageLoading: false,
  id: null,
  username: "",
  email: "",
  phone: "",
  imgProfile: null,
  isVerified: false,
  role: "",
};

//@global error hanlder
export const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

// @auth success
const isAuthSuccess = (action) => {
  return [login.fulfilled.type, keepLogin.fulfilled.type, register.fulfilled.type].includes(action.type);
};

// @create slice
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoginLoading = true;
    });
    builder.addCase(verifyAccount.pending, (state, action) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(verifyAccount.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
      state.isVerified = true;
    });
    builder.addCase(keepLogin.pending, (state, action) => {
      state.isKeepLoginLoading = true;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.isLogoutLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state = Object.assign(state, INITIAL_STATE);
    });
    builder.addCase(updateImageProfile.pending, (state, action) => {
      state.isUploadImageLoading = true;
    });
    builder.addCase(updateImageProfile.fulfilled, (state, action) => {
      state.isUploadImageLoading = false;
      state.imgProfile = action.payload;
    });

    // @auth success handler
    builder.addMatcher(isAuthSuccess, (state, action) => {
      state = Object.assign(state, {
        isLoginLoading: false,
        isKeepLoginLoading: false,
        isRegisterLoading: false,
        id: action.payload?.id,
        username: action.payload?.username,
        phone: action.payload?.phone,
        imgProfile: action.payload?.imageProfile,
        email: action.payload?.email,
        role: action.payload?.role,
        isVerified: action.payload?.isVerified,
      });
    });

    // @error hanlder
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoginLoading = false;
      state.isKeepLoginLoading = false;
      state.isRegisterLoading = false;
      state.isLogoutLoading = false;
      state.isUploadImageLoading = false;

      // @console error
      console.error(action.payload);
      Toast.error(action.payload?.message || "Error : something went wrong.");
    });
  },
});

// export reducer
export default authSlice.reducer;
