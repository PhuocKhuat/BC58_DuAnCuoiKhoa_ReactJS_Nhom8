import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './Redux/headerSlice';
import { Provider } from 'react-redux';
// import homeSlice from './Redux/homeSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import detailSlice from './Redux/detailSlice';
import personalSlice from './Redux/personalSlice';
import personalSliceThunk from './Redux/personalSliceThunk';
import spinnerSlice from './Redux/spinnerSlice';
import courseCatalogSlice from './Redux/courseCatalogSlice';
import searchSlice from './Redux/searchSlice';
import searchCatalogThunk from './Redux/searchCatalogThunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const store = configureStore({reducer:{
  headerSlice,
  // homeSlice,
  detailSlice,
  personalSlice,
  personalSliceThunk,
  spinnerSlice,
  courseCatalogSlice,
  searchSlice,
  searchCatalogThunk,
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
