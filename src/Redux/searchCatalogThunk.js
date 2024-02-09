import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { https } from '../Services/api';

const initialState = {
  courseCatalogById: [],
}

export const fetchCourseCatalog = createAsyncThunk("fetchCourseCatalog", async (maDanhMuc = "")=>{
  if(maDanhMuc.trim() !== ""){
    let res = await https.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`);
    return res.data;
  }
})

const searchCatalogThunk = createSlice({
  name: "searchCatalogThunk",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchCourseCatalog.fulfilled, (state, action)=>{
      state.courseCatalogById = action.payload;
    },)
  }
});

export const {} = searchCatalogThunk.actions

export default searchCatalogThunk.reducer