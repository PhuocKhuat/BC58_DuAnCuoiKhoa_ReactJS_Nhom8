import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
  catalog: [],
}

const headerSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setUser: (state, action)=>{
      state.user = action.payload;
    },
    setCatalog : (state, action)=>{
      state.catalog = action.payload;
    },
  }
});

export const { setUser, setCatalog } = headerSlice.actions

export default headerSlice.reducer