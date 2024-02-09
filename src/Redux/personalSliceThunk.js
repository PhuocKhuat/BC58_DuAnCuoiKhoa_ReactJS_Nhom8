import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../Services/api";

const initialState = {
  coursesList: [],
};

export const fetchCoursesList = createAsyncThunk(
  "fetchCoursesList",
  async (tenKhoaHoc = "", maDanhMuc="") => {
    if (tenKhoaHoc.trim() !== "") {
      let res = await https.get(
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP09`
      );
      return res.data;
    } else if (tenKhoaHoc.trim() === "") {
      let res = await https.get(
        "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
      );
      return res.data;
    } else if(maDanhMuc.trim() !== ""){
      let res = await https.get(
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`
      );
      return res.data;
    }
  }
);

const personalSliceThunk = createSlice({
  name: "personalSliceThunk",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoursesList.fulfilled, (state, action) => {
      state.coursesList = action.payload;
    });
  },
});

export const {} = personalSliceThunk.actions;

export default personalSliceThunk.reducer;
