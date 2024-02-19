import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../Services/api";

const initialState = {
  courseListAwaitingApproval: [],
  courseListNotRegister: [],
  courseListRegistered: [],
};

export const fetchCourseListAwaitingApproval = createAsyncThunk(
  "fetchCourseListAwaitingApproval",
  async (taiKhoan) => {
    let res = await https.post("/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", {taiKhoan})
    return res.data;
  }
);

export const fetchCourseListNotRegister = createAsyncThunk(
  "fetchCourseListNotRegister",
  async (taiKhoan) => {
    let res = await https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`)
    return res.data;
  }
);

export const fetchCourseListRegistered = createAsyncThunk(
  "fetchCourseListRegistered",
  async (taiKhoan) => {
    let res = await https.post("/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", {taiKhoan})
    return res.data;
  }
);

const courseRegistrationSlice = createSlice({
  name: "courseRegistrationSlice",
  initialState,
  reducers: {
    setDuplicatedCourse: (state, action)=>{
      state.courseListRegistered = action.payload;
    },
  },
  extraReducers: (builder)=>{
   builder.addCase(fetchCourseListAwaitingApproval.fulfilled, (state, action)=>{
     state.courseListAwaitingApproval = action.payload;
   });
   builder.addCase(fetchCourseListNotRegister.fulfilled, (state, action)=>{
     state.courseListNotRegister = action.payload;
   });
   builder.addCase(fetchCourseListRegistered.fulfilled, (state, action)=>{
     state.courseListRegistered = action.payload;
   });
  }
});

export const { setDuplicatedCourse } = courseRegistrationSlice.actions;

export default courseRegistrationSlice.reducer;