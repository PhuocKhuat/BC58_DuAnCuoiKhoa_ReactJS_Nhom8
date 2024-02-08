import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courseCatalogById: [],
}

const courseCatalogSlice = createSlice({
  name: "courseCatalogSlice",
  initialState,
  reducers: {
    setCourseCatalogById: (state, action)=>{
      state.courseCatalogById = action.payload;
    },
  }
});

export const { setCourseCatalogById } = courseCatalogSlice.actions

export default courseCatalogSlice.reducer