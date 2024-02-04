import { createSlice } from '@reduxjs/toolkit'
import individualInfo from '../ObjectClass/individualInfo';

const initialState = {
    infoUser : new individualInfo(),
}

const personalSlice = createSlice({
  name: "personalSlice",
  initialState,
  reducers: {
    setInfoUser: (state, action)=>{
      state.infoUser = action.payload;
    },
  }
});

export const { setInfoUser } = personalSlice.actions

export default personalSlice.reducer