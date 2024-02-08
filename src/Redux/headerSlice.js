import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
  catalog: [],
  isHovering: false,
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
    setIsHovering: (state, action)=>{
      state.isHovering = action.payload;  
    },
  }
});

export const { setUser, setCatalog, setIsHovering } = headerSlice.actions

export default headerSlice.reducer