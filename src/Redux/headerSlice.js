import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem("USER_INFO")),
  catalog: [],
  isHovering: false,
  profile: JSON.parse(localStorage.getItem("LOGIN_FACEBOOK")),
  // searchCourse: false,
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
    setLoginFB: (state, action)=>{
      state.profile = action.payload;
    },
    // setSearchCourse: (state, action)=>{
    //   state.searchCourse = action.payload;
    // },
  }
});

export const { setUser, setCatalog, setIsHovering, setSearchCourse, setLoginFB } = headerSlice.actions

export default headerSlice.reducer