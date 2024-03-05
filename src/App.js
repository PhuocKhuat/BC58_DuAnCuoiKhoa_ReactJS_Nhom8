import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import FormLogin from "./Pages/LoginPage/FormLogin";
import FormSignup from "./Pages/LoginPage/FormSignup";
import HomePage from "./Pages/HomePage/HomePage";
import LayoutLottie from "./Layouts/LayoutLottie";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DetailPage from "./Pages/DetailPage/DetailPage";
import PrivateLayout from "./Layouts/PrivateLayout";
import TabPersonalInfo from "./Pages/PersonalInfo/TabsPersonalInfo";
import Spinner from "./Components/Spinner/Spinner";
import CourseCatalog from "./Pages/CourseCatalog/CourseCatalog";
import SearchPage from "./Pages/SearchPage/SearchPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import AdminUserPage from "./Pages/AdminUserPage/AdminUserPage";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout";
import SecureGate from "./Layouts/SecureGate";
import AdminCoursePage from "./Pages/AdminCoursePage/AdminCoursePage";
import Course from "./Pages/Course/Course/Course";
import Blog from "./Pages/Blog/Blog";
import EventPage from "./Pages/EventPage/EventPage";
import BackToTop from "./Components/BackToTop/BackToTop";
import CourseAll from "./Pages/Course/CourseAll";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Spinner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:idKhoaHoc" element={<DetailPage />} />
          <Route path="/" element={<LayoutLottie />}>
            <Route path="/signup" element={<FormSignup />} />
          </Route>
          <Route path="/course" element={<CourseAll/>} />
          <Route
            path="/personalinfo"
            element={
              <PrivateLayout>
                <TabPersonalInfo />
              </PrivateLayout>
            }
          />
          <Route
            path="/coursecatalog/:idMaDanhMuc"
            element={<CourseCatalog />}
          />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/event" element={<EventPage/>}/>
          <Route path="/searchcourse" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin" element={
            <SecureGate>
              <AdminLayout />
            </SecureGate>
          }>
            <Route path="users" element={<AdminUserPage />} />
            <Route path="courses" element={<AdminCoursePage/>} />
          </Route>
        </Routes>
        <BackToTop/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
