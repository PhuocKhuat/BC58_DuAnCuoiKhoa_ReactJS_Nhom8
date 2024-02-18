import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { https } from "../Services/api";

const initialState = {
  courseListAwaitingApproval: [],
};

export const fetchCourseListAwaitingApproval = createAsyncThunk(
  "fetchCourseListAwaitingApproval",
  async (taiKhoan) => {
    let res = await https.post("/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", {taiKhoan})
    return res.data;
  }
);

const courseRegistrationSlice = createSlice({
  name: "courseRegistrationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
   builder.addCase(fetchCourseListAwaitingApproval.fulfilled, (state, action)=>{
     state.courseListAwaitingApproval = action.payload;
   },)
  }
});

export const {} = courseRegistrationSlice.actions;

export default courseRegistrationSlice.reducer;
