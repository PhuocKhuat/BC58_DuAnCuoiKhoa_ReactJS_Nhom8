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
            <Route path="/account" element={<FormLogin />} />
            <Route path="/signup" element={<FormSignup />} />
          </Route>
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
          <Route path="/searchcourse" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="manage" element={<AdminUserPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
