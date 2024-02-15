import { createSlice } from '@reduxjs/toolkit'
import PaginationCourse from '../ObjectClass/paginationCourse';

const initialState = {
    paginationCourse: new PaginationCourse(),
}

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    setPaginationCourse: (state, action)=>{
      state.paginationCourse = action.payload;
    },
  }
});

export const { setPaginationCourse } = courseSlice.actions

export default courseSlice.reducer