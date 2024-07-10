import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../Service/operation/authAPI";
const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className="w-1/2 max-w-maxContent mx-auto my-auto flex place-content-center place-items-center">
      {loading ? (
        <div className="text-white">LOADING.....</div>
      ) : (
        <div className="w-full max-w-[444px] flex flex-col gap-4 text-white">
          <h1 className="text-2xl  text-richblack-5 font-inter font-semibold">
            {!emailSent ? "Reset your password" : "Check Email"}
          </h1>
          <p className="text-lg font-normal text-richblack-100">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
            {!emailSent && (
              <label className="flex flex-col gap-2">
                <p className="text-sm font-inter text-richblack-5">
                  Email Address <span className="text-pink-300">*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 p-3 rounded-md bg-richblack-800 placeholder:pl-3 placeholder:text-base border-b-[1px] border-richblack-400"
                />
              </label>
            )}
            <button
              type="submit"
              className="w-full h-12  bg-[#FFD60A] text-richblack-900 font-inter text-center font-semibold rounded-md"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>
          <Link to="/login">
            <div className="flex  items-center gap-1  ml-4 text-base font-medium font-inter">
              <span>
                <FaArrowLeftLong />
              </span>{" "}
              <p>Back to Login</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
