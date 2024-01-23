import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import FormLogin from "./Pages/LoginPage/FormLogin";
import FormSignup from "./Pages/LoginPage/FormSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<FormLogin />} />
          <Route path="/signup" element={<FormSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
