import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { https } from '../Services/api';

const initialState = {
  userList :  [],
}

export const fetchAdminUser = createAsyncThunk("fetchAdminUser", async ()=>{
  let res = await https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  return res.data;
})

const adminUserSliceThunk = createSlice({
  name: "adminUserSliceThunk",
  initialState,
  reducers: {},
  extraReducers: (buider)=>{
    buider.addCase(fetchAdminUser.fulfilled, (state, action)=>{
      state.userList = action.payload;
    },)    
  }
});

export const { setDeleteUser, setAddUser } = adminUserSliceThunk.actions

export default adminUserSliceThunk.reducer