import { createSlice } from '@reduxjs/toolkit'
import individualInfo from '../ObjectClass/individualInfo';
import Swal from 'sweetalert2';
import { message } from 'antd';

const initialState = {
  infoUser : new individualInfo(),
  coursesList: [] ,
}

const personalSlice = createSlice({
  name: "personalSlice",
  initialState,
  reducers: {
    setInfoUser: (state, action)=>{
      state.infoUser = action.payload;
    },
    setAddCourse: (state, action)=>{
      let cloneCoursesList = [...state.coursesList];
      let indexCourse = cloneCoursesList.findIndex(course => course.maKhoaHoc === action.payload.maKhoaHoc);
      if(indexCourse === -1){
        cloneCoursesList.push(action.payload);
        message.success("Sign up success");
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Registered for this course!",
          text: "An error occurred. Please return to the home page or try again",
          timer: 1500,
          showConfirmButton: false,
        });
      }
      state.coursesList = cloneCoursesList;
    },
    setDeleteCourse: (state, action)=>{
      let cloneFilterList = [...state.coursesList];
      cloneFilterList.filter(course => course.maKhoaHoc !== action.payload);
      state.coursesList = cloneFilterList;
    },
  }
});

export const { setInfoUser, setAddCourse, setDeleteCourse } = personalSlice.actions

export default personalSlice.reducer