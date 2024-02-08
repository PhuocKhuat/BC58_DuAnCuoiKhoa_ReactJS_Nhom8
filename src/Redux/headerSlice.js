import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
  catalog: [],
  isHovering: false,
  searchCourse: false,
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
    setSearchCourse: (state, action)=>{
      state.searchCourse = action.payload;
    },
  }
});

export const { setUser, setCatalog, setIsHovering, setSearchCourse } = headerSlice.actions

export default headerSlice.reducer