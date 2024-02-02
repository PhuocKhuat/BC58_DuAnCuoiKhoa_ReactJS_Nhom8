import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import FormLogin from "./Pages/LoginPage/FormLogin";
import FormSignup from "./Pages/LoginPage/FormSignup";
import HomePage from "./Pages/HomePage/HomePage";
import LayoutLottie from "./Layouts/LayoutLottie";
import Header from "./Components/Header/Header";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LayoutLottie/>}>
            <Route path="/account" element={<FormLogin />} />
            <Route path="/signup" element={<FormSignup />} />
          </Route>
          <Route path="/personalInfo" element={<PersonalInfo/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
