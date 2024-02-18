import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../Services/api";

const initialState = {
  userNotRegistration: [],
  userListAwaitingApproval: [],
  userListConfirmed: [],
};

export const fetchUserNotRegistration = createAsyncThunk(
  "fetchUserNotRegistration",
  async (maKhoaHoc) => {
      let res = await https.post(
        "/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
        {maKhoaHoc}
      );
      return res.data;
  }
);

export const fetchUserListAwaitingApproval = createAsyncThunk("fetchUserListAwaitingApproval", async(maKhoaHoc)=>{
    let res = await https.post("/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", {maKhoaHoc});
    return res.data;
})

export const fetchUserListConfirmed = createAsyncThunk("fetchUserListConfirmed", async(maKhoaHoc)=>{
    let res = await https.post("/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", {maKhoaHoc});
    return res.data;
})

export const handleHuyGhiDanh = createAsyncThunk("handleHuyGhiDanh", async(maKhoaHoc)=>{
  const checkLogin = localStorage.getItem("USER_INFO");
  if(checkLogin){
    const objectLogin = JSON.parse(checkLogin);
    const cancelCourse = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: objectLogin.taiKhoan,
    }
    await https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", cancelCourse)
  }
})

const userRegistrationSlice = createSlice({
  name: "userRegistrationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserNotRegistration.fulfilled, (state, action) => {
      state.userNotRegistration = action.payload;
    });
    builder.addCase(fetchUserListAwaitingApproval.fulfilled, (state, action) => {
        state.userListAwaitingApproval = action.payload;
      });
    builder.addCase(fetchUserListConfirmed.fulfilled, (state, action)=>{
      state.userListConfirmed = action.payload;
    },)
  },
});

export const {} = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
