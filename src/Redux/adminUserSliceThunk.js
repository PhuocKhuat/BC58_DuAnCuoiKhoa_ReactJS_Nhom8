import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { https } from '../Services/api';

const initialState = {
  userList : [],
}

export const fetchAdminUser = createAsyncThunk("fetchAdminUser", async ()=>{
  let res = await https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  return res.data;
})

const adminUserSliceThunk = createSlice({
  name: "adminUserSliceThunk",
  initialState,
  reducers: {
    setDeleteUser : (state, action)=>{
      let cloneUserList = [...state.userList];
      let indexUser = cloneUserList.filter(user => user.taiKhoan !== action.payload);
      state.userList = indexUser;
    },
  },
  extraReducers: (buider)=>{
    buider.addCase(fetchAdminUser.fulfilled, (state, action)=>{
      state.userList = action.payload;
    },)    
  }
});

export const { setDeleteUser} = adminUserSliceThunk.actions

export default adminUserSliceThunk.reducer