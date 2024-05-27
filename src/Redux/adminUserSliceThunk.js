import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../Services/api";

const initialState = {
  userList: [],
};

export const fetchAdminUser = createAsyncThunk(
  "fetchAdminUser",
  async (value = "") => {
    if (value.trim() !== "") {
      let res = await https.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${value}`
      );
      return res.data;
    }
    let res = await https.get(
      "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
    );
    return res.data;
  }
);

const adminUserSliceThunk = createSlice({
  name: "adminUserSliceThunk",
  initialState,
  reducers: {
    addNewUserToTop: (state, action) => {
      state.userList.unshift(action.payload);
    },
  },
  extraReducers: (buider) => {
    buider.addCase(fetchAdminUser.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
});

export const { setDeleteUser, setAddUser, addNewUserToTop } = adminUserSliceThunk.actions;

export default adminUserSliceThunk.reducer;
