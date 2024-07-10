import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { resetPassword } from "../Service/operation/authAPI";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [formdata, setformdata] = useState({
    password: "",
    confirmPassword: "",
  });

  const { password, confirmPassword } = formdata;

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const changeHandler = (e) => {
    setformdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formdata);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
    setformdata("");
  };

  return (
    <div>
      <div className="w-[45%] max-w-maxcontent mx-auto my-28 ">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full max-w-[420px] mx-auto flex flex-col gap-6 text-richblack-5">
            <div className="space-y-2">
              <h1 className="text-3xl font-inter font-semibold text-richblack-5">
                Choose new password
              </h1>
              <p className="text-lg font-normal text-richblack-100">
                Almost done. Enter your new password and youre all set.
              </p>
            </div>
            <div>
              <form onSubmit={submitHandler} className="flex flex-col gap-6">
                <label htmlFor="newPass" className="space-y-1 relative">
                  <p className="text-sm font-inter text-richblack-5">
                    New Password <span className="text-pink-300">*</span>
                  </p>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={changeHandler}
                    placeholder="******"
                    className="w-full h-12 p-3 rounded-md bg-richblack-800 placeholder:pl-3 placeholder:text-xl border-b-[1px] border-richblack-400"
                  />
                  <span
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute top-8 right-5 cursor-pointer"
                  >
                    {showNewPassword ? (
                      <FaRegEye fontSize={22} fill="#AFB2BF" />
                    ) : (
                      <FaRegEyeSlash fontSize={22} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <label htmlFor="confirmPass" className="space-y-1 relative">
                  <p className="text-sm font-inter text-richblack-5">
                    Confirm new Password{" "}
                    <span className="text-pink-300">*</span>
                  </p>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={changeHandler}
                    placeholder="******"
                    className="w-full h-12 p-3 rounded-md bg-richblack-800 placeholder:pl-3 placeholder:text-xl border-b-[1px] border-richblack-400"
                  />

                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute bottom-4 right-5 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <FaRegEye fontSize={22} fill="#AFB2BF" />
                    ) : (
                      <FaRegEyeSlash fontSize={22} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full h-12  bg-[#FFD60A] text-richblack-900 font-inter text-center font-semibold rounded-md"
                >
                  Reset Password
                </button>
              </form>
            </div>
            <Link to="/login">
              <div className="flex  items-center gap-1  ml-4 text-base font-medium font-inter">
                <span>
                  <FaArrowLeftLong />
                </span>
                <p>Back to Login</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatePassword;
