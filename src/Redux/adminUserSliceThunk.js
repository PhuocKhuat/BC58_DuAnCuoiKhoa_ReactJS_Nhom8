import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { https } from '../Services/api';
import { message } from 'antd';

const initialState = {
  userList :  [],
  editUser: null,
}

// localStorage.getItem("DELETE_USER") === -1 ?
// : JSON.parse(localStorage.getItem("DELETE_USER"))

// const userLocal = (user)=>{
//   localStorage.setItem("DELETE_USER", JSON.stringify(user));
// }

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
      message.success("The user has been successfully deleted");
      // userLocal(state.userList.map(user => user));
    },
    setAddUser: (state, action)=>{
      let cloneAddUser = [...state.userList];
      cloneAddUser.push(action.payload)
      state.userList = cloneAddUser;
    },
  },
  extraReducers: (buider)=>{
    buider.addCase(fetchAdminUser.fulfilled, (state, action)=>{
      state.userList = action.payload;
    },)    
  }
});

export const { setDeleteUser, setAddUser } = adminUserSliceThunk.actions

export default adminUserSliceThunk.reducer