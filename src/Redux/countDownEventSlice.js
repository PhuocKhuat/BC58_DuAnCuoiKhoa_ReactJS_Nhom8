import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    timerDays: '30',
    timerHours: '60',
    timerMinutes: '60',
    timerSeconds: '60'
}

const countDownEventSlice = createSlice({
  name: "countDownEventSlice",
  initialState,
  reducers: {
    setTimerDays: (state, action)=>{
      state.timerDays = action.payload;
    },
    setTimerHours: (state, action)=>{
      state.timerHours = action.payload;
    },
    setTimerMinutes: (state, action)=>{
      state.timerMinutes = action.payload;
    },
    setTimerSeconds: (state, action)=>{
      state.timerSeconds = action.payload;
    },
  }
});

export const { setTimerDays, setTimerHours, setTimerMinutes, setTimerSeconds} = countDownEventSlice.actions

export default countDownEventSlice.reducer