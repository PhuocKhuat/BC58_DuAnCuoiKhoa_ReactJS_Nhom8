import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
}

const headerSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setUser: (state, action)=>{
      state.user = action.payload;
    },
  }
});

export const { setUser } = headerSlice.actions

export default headerSlice.reducer