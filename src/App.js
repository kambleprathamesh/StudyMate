import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Common/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/signUp";
import Error from "./Pages/Error";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About"
import MyProfile from "./Pages/MyProfile";
function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-richblack-900 font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="update-password/:id" element={<UpdatePassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="About" element={<About />} />
        <Route path="dashboard/my-profile" element={<MyProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
