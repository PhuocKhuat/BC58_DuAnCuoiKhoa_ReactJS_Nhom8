import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: {},
};

const adminCourseSlice = createSlice({
  name: "adminCourseSlice",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setImage } = adminCourseSlice.actions;

export default adminCourseSlice.reducer;
