import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategory : false,
  selectedCategoryCourse : false,
}

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSelectedCategory: (state, action)=>{
        state.selectedCategory = action.payload;
    },
    setSelectedCategoryCourse: (state, action)=>{
        state.selectedCategoryCourse = action.payload;
    },
  }
});

export const { setSelectedCategory, setSelectedCategoryCourse} = searchSlice.actions

export default searchSlice.reducer