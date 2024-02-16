import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PaginationCourse from "../ObjectClass/paginationCourse";
import { https } from "../Services/api";

const initialState = {
  paginationCourse: new PaginationCourse(),
};

export const fetchPaginationCourse = createAsyncThunk(
  "fetchPaginationCourse",
  async (currentPage) => {
    if(currentPage){
      let res = await https.get(
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=9&MaNhom=GP09`
      );
      return res.data;
    }
    let res = await https.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=9&MaNhom=GP09`
    );
    return res.data;
  }
);

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    // setPaginationCourse: (state, action) => {
    //   state.paginationCourse = action.payload;
    // },
    // setCurrentPage: (state, action) => {
    //   state.paginationCourse.items = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPaginationCourse.fulfilled, (state, action) => {
      state.paginationCourse = action.payload;
    });
  },
});

export const {} = courseSlice.actions;

export default courseSlice.reducer;
