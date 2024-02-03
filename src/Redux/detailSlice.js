import { createSlice } from '@reduxjs/toolkit'
import detailCourse from '../ObjectClass/detailCourse';

const initialState = {
    detail: new detailCourse(),
}

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    setDetail: (state, action)=>{
      state.detail = action.payload;
    },
  }
});

export const { setDetail } = detailSlice.actions

export default detailSlice.reducer