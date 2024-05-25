import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './Redux/headerSlice';
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import detailSlice from './Redux/detailSlice';
import personalSlice from './Redux/personalSlice';
import personalSliceThunk from './Redux/personalSliceThunk';
import spinnerSlice from './Redux/spinnerSlice';
import courseCatalogSlice from './Redux/courseCatalogSlice';
import searchCatalogThunk from './Redux/searchCatalogThunk';
import adminUserSliceThunk from './Redux/adminUserSliceThunk';
import courseSlice from './Redux/courseSlice';
import userRegistrationSlice from './Redux/userRegistrationSlice';
import courseRegistrationSlice from './Redux/courseRegistrationSlice';
import countDownEventSlice from './Redux/countDownEventSlice';
import adminCourseSlice from './Redux/adminCourseSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const store = configureStore({reducer:{
  headerSlice,
  detailSlice,
  personalSlice,
  personalSliceThunk,
  spinnerSlice,
  courseCatalogSlice,
  searchCatalogThunk,
  adminUserSliceThunk,
  courseSlice,
  userRegistrationSlice,
  courseRegistrationSlice,
  countDownEventSlice,
  adminCourseSlice
}})
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
