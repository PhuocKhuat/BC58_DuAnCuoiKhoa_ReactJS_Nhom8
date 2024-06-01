import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IndividualInfo from "../ObjectClass/individualInfo";
import { https } from "../Services/api";
import Swal from "sweetalert2";
// import { saveInforUser } from "../Pages/PersonalInfo/PersonalInfo";

const initialState = {
  infoUser: new IndividualInfo(),
  coursesList:
    localStorage.getItem("courseItem") !== null
      ? JSON.parse(localStorage.getItem("courseItem"))
      : [],
};

const saveLocalStorage = (courseItem) => {
  localStorage.setItem("courseItem", JSON.stringify(courseItem));
};

export const fetchThongTinTaiKhoan = createAsyncThunk(
  "fetchThongTinTaiKhoan",
  async () => {
    let res = await https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    return res.data;
  }
);

const personalSlice = createSlice({
  name: "personalSlice",
  initialState,
  reducers: {
    // setInfoUser: (state, action) => {
    //   state.infoUser = action.payload;
    // },
    setAddCourse: (state, action) => {
      let cloneCoursesList = [...state.coursesList];
      let indexCourse = cloneCoursesList.findIndex(
        (course) => course.maKhoaHoc === action.payload.maKhoaHoc
      );
      if (indexCourse === -1) {
        cloneCoursesList.push(action.payload);
      }
      state.coursesList = cloneCoursesList;
      saveLocalStorage(state.coursesList.map((course) => course));
    },
    setDeleteCourse: (state, action) => {
      let cloneFilterList = [...state.coursesList];
      let indexFilter = cloneFilterList.filter(
        (course) => course.maKhoaHoc !== action.payload
      );
      state.coursesList = indexFilter;
      saveLocalStorage(state.coursesList.map((course) => course));
    },
    setSearchForm: (state, action) => {
      let cloneCoursesList = [...state.coursesList];
      let filterSearch = cloneCoursesList.filter((course) =>
        course.tenKhoaHoc.toLowerCase().includes(action.payload.toLowerCase())
      );
      // console.log("🚀 ~ filterSearch:", filterSearch)
      state.coursesList = filterSearch;
    },
    setUpdateForm: (state, action) => {
      state.infoUser = action.payload;
      // localStorage.setItem("UPDATE_USER", JSON.stringify(state.infoUser));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchThongTinTaiKhoan.fulfilled, (state, action) => {
      state.infoUser = action.payload;
    });
  },
});
export const { setAddCourse, setDeleteCourse, setSearchForm, setUpdateForm } =
  personalSlice.actions;

export default personalSlice.reducer;
