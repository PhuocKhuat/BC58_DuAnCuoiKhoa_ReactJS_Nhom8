import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
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